import { useEffect, useRef, useState } from 'react';
import type { InsightsContent } from '@typings/content';
import { InsightCard } from '@components/cards/InsightCard';
import { ChevronIcon } from '@components/ui/ChevronIcon';
import { ContentLink } from '@components/ui/ContentLink';
import { Section } from '@components/ui/Section';
import { SectionHeading } from '@components/ui/SectionHeading';
import '@components/InsightsSection.css';

interface InsightsSectionProps {
  content: InsightsContent;
}

/** Where the track is: how many stops it has (one per card it can move) and which one is showing. */
interface TrackPosition {
  stops: number;
  current: number;
}

const TRACK_ID = 'insights-track';

/** Distance from one card's start to the next. */
const getStep = (track: HTMLElement) => {
  const firstCard = track.firstElementChild;
  const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
  return firstCard instanceof HTMLElement ? firstCard.offsetWidth + gap : track.clientWidth;
};

const scrollBehaviour = (): ScrollBehavior =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

/**
 * Article cards in a row that scrolls sideways. Arrows move one card at a time;
 * the dots below show where you are and jump to a position.
 */
export const InsightsSection = ({ content }: InsightsSectionProps) => {
  const trackRef = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState<TrackPosition>({ stops: 1, current: 0 });

  // Keep the arrows and dots in step with the scroll position and the track's size.
  useEffect(() => {
    const track = trackRef.current;
    if (track === null) {
      return undefined;
    }

    const update = () => {
      const step = getStep(track);
      const maxScroll = track.scrollWidth - track.clientWidth;
      const stops = maxScroll > 1 ? Math.round(maxScroll / step) + 1 : 1;
      // At the very end, show the last dot even if the last move was shorter than a card.
      const atEnd = track.scrollLeft >= maxScroll - 1;
      const current = atEnd ? stops - 1 : Math.round(track.scrollLeft / step);
      setPosition((previous) =>
        previous.stops === stops && previous.current === current ? previous : { stops, current },
      );
    };

    update();
    track.addEventListener('scroll', update, { passive: true });
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener('scroll', update);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollToStop = (stop: number) => {
    const track = trackRef.current;
    if (track === null) {
      return;
    }
    track.scrollTo({ left: stop * getStep(track), behavior: scrollBehaviour() });
  };

  const { stops, current } = position;
  const hasOverflow = stops > 1;
  const stopNumbers = Array.from({ length: stops }, (_, index) => index);

  return (
    <Section id="insights" tone="cream" labelledBy="insights-title">
      <div className="insights__header">
        <SectionHeading intro={content} headingId="insights-title" />
        <ContentLink item={content.allLink} className="insights__all" />
      </div>

      {/* Revealed as one: cards off to the side are outside the view until scrolled to */}
      <div className="insights__carousel" data-reveal>
        <ul id={TRACK_ID} ref={trackRef} className="insights__track">
          {content.cards.map((card) => (
            <li key={card.id} className="insights__item">
              <InsightCard card={card} />
            </li>
          ))}
        </ul>

        {hasOverflow && (
          <>
            <button
              type="button"
              className="insights__arrow insights__arrow--back"
              aria-label={content.previousLabel}
              aria-controls={TRACK_ID}
              disabled={current === 0}
              onClick={() => scrollToStop(current - 1)}
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              className="insights__arrow insights__arrow--forward"
              aria-label={content.nextLabel}
              aria-controls={TRACK_ID}
              disabled={current === stops - 1}
              onClick={() => scrollToStop(current + 1)}
            >
              <ChevronIcon direction="right" />
            </button>
          </>
        )}
      </div>

      {hasOverflow && (
        <div className="insights__dots">
          {stopNumbers.map((stop) => (
            <button
              key={stop}
              type="button"
              className="insights__dot"
              aria-label={`${content.positionLabel} ${stop + 1} / ${stops}`}
              aria-controls={TRACK_ID}
              aria-current={stop === current ? 'true' : undefined}
              onClick={() => scrollToStop(stop)}
            />
          ))}
        </div>
      )}
    </Section>
  );
};
