import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react';
import templateImage from '@assets/images/template.svg';
import { EventCard } from '@components/cards/EventCard';
import { InsightCard } from '@components/cards/InsightCard';
import { ServiceCard } from '@components/cards/ServiceCard';
import { Gallery } from '@components/Gallery';
import { ArrowIcon } from '@components/ui/ArrowIcon';
import { Button, type ButtonSize } from '@components/ui/Button';
import { SECTION_TONES } from '@components/ui/tones';
import type { ArticleCard, EventCardLabels, EventStrand, ImageAsset } from '@typings/content';
import '@pages/DesignSystemPage.css';

/*
 * A static style guide. Every preview reads the design tokens through var()
 * and uses the shared components, so it changes when they change.
 * All copy and images below are templates, not site content.
 */

const COLOURS = ['ember', 'bark', 'ink', 'sand', 'stone'] as const;

/** Matches the "Brand colours" group in tokens.css. */
const BRAND_COLOURS: ReadonlySet<string> = new Set(['ember', 'bark', 'ink']);

const SHADES = [100, 200, 300, 400, 500] as const;

/** tokens.css: "300 is the brand value". */
const BRAND_SHADE = 300;

const FONT_FAMILIES = ['--font-display', '--font-text', '--font-mono', '--font-wide'] as const;

const FONT_SIZES = [
  '--text-display',
  '--text-h2',
  '--text-statement',
  '--text-h3',
  '--text-lead',
  '--text-body',
  '--text-mono',
  '--text-small',
  '--text-eyebrow',
] as const;

const SPACING = Array.from({ length: 10 }, (_, index) => `--space-${index + 1}`);

const SHADOWS = ['--shadow-soft', '--shadow-raised'] as const;

/** Each name has a matching `--breakpoint-*` token and a `.ds-breakpoint--*` class. */
const BREAKPOINTS = ['wide', 'nav', 'tablet', 'footer', 'mobile', 'mobile-small'] as const;

const DEVICES = [
  { breakpoint: 'mobile-small', device: 'phone' },
  { breakpoint: 'mobile', device: 'phone' },
  { breakpoint: 'tablet', device: 'tablet' },
  { breakpoint: 'wide', device: 'laptop' },
] as const;

const BUTTON_TYPES = ['primary', 'secondary'] as const;
const BUTTON_SIZES: readonly ButtonSize[] = ['large', 'small'];
const BUTTON_STATES = ['default', 'hover', 'pressed', 'inactive'] as const;
const BUTTON_ICONS = [false, true] as const;

/** Classes that show a state without interaction (see Button.css). */
const STATE_CLASS = { default: undefined, hover: 'is-hover', pressed: 'is-pressed', inactive: undefined };

const TEMPLATE_IMAGE: ImageAsset = { src: templateImage, alt: '', width: 400, height: 300 };

const TEMPLATE_BODY = 'Short supporting text that describes the card in a sentence or two.';

const serviceCard = { title: 'Card title', body: TEMPLATE_BODY, tagline: 'Optional tagline' };

const eventLabels: EventCardLabels = { upcoming: 'Upcoming label', past: 'Past label', comingSoon: 'No date yet' };

const upcomingEvent: EventStrand = {
  kind: 'upcoming',
  id: 'upcoming',
  title: 'Card title',
  body: TEMPLATE_BODY,
  place: 'Optional place',
  date: '2025-01-01',
};

const undatedEvent: EventStrand = {
  kind: 'upcoming',
  id: 'undated',
  title: 'Card title',
  body: TEMPLATE_BODY,
};

const pastEvent: EventStrand = {
  kind: 'past',
  id: 'past',
  title: 'Card title',
  body: TEMPLATE_BODY,
  place: 'Optional place',
  image: TEMPLATE_IMAGE,
};

const insightCard: ArticleCard = {
  id: 'article',
  topic: 'Topic',
  title: 'Card title that may run onto a second line',
  excerpt: TEMPLATE_BODY,
  date: '2025-01-01',
  readingMinutes: 5,
  link: { kind: 'url', href: '#' },
  image: TEMPLATE_IMAGE,
};

const galleryItems = [
  { image: TEMPLATE_IMAGE, caption: 'First image caption' },
  { image: TEMPLATE_IMAGE, caption: 'Second image caption' },
];

const capitalise = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

interface PanelProps {
  id: string;
  title: string;
  wide?: boolean;
  children: ReactNode;
}

const Panel = ({ id, title, wide = false, children }: PanelProps) => (
  <section
    id={id}
    className={wide ? 'ds-panel ds-panel--wide' : 'ds-panel'}
    aria-labelledby={`${id}-title`}
  >
    <h2 id={`${id}-title`} className="ds-panel__title">
      {title}
    </h2>
    {children}
  </section>
);

interface SpecimenProps {
  label: string;
  wide?: boolean;
  children: ReactNode;
}

/** Turns a computed colour like `rgb(185, 173, 167)` into `#B9ADA7`. */
const rgbToHex = (rgb: string): string | undefined => {
  const channels = rgb.match(/\d+(\.\d+)?/g);
  if (channels === null || channels.length < 3) {
    return undefined;
  }
  const hex = channels
    .slice(0, 3)
    .map((channel) => Math.round(Number(channel)).toString(16).padStart(2, '0'))
    .join('');
  return `#${hex.toUpperCase()}`;
};

interface ColourSwatchProps {
  token: string;
  brand?: boolean;
}

/** A colour square with its hex value, read from the rendered token. */
const ColourSwatch = ({ token, brand = false }: ColourSwatchProps) => {
  const swatchRef = useRef<HTMLSpanElement>(null);
  const [hex, setHex] = useState<string>();

  useEffect(() => {
    if (swatchRef.current !== null) {
      setHex(rgbToHex(getComputedStyle(swatchRef.current).backgroundColor));
    }
  }, [token]);

  return (
    <>
      <span ref={swatchRef} className="ds-shade" title={token} style={{ background: `var(${token})` }}>
        {brand && (
          <span className="ds-shade__brand" title="Brand colour">
            <span className="visually-hidden">Brand colour</span>
          </span>
        )}
      </span>
      {hex !== undefined && <code className="ds-code ds-shade__hex">{hex}</code>}
    </>
  );
};

/** One labelled cell in the cards grid. */
const Specimen = ({ label, wide = false, children }: SpecimenProps) => (
  <li className={wide ? 'ds-specimen ds-specimen--wide' : 'ds-specimen'}>
    <span className="ds-code">{label}</span>
    {children}
  </li>
);

export const DesignSystemPage = () => {
  return (
    <main className="ds-page tone-sand">
      <div className="container ds-grid">
        <h1 className="visually-hidden">Design system</h1>

        <Panel id="colours" title="Colours">
          <table className="ds-colours">
            <thead>
              <tr>
                <td />
                {SHADES.map((shade) => (
                  <th key={shade} scope="col" className="ds-code">
                    {shade}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COLOURS.map((colour) => (
                <tr key={colour}>
                  <th scope="row" className="ds-code">
                    --color-{colour}
                  </th>
                  {SHADES.map((shade) => (
                    <td key={shade}>
                      <ColourSwatch
                        token={`--color-${colour}-${shade}`}
                        brand={BRAND_COLOURS.has(colour) && shade === BRAND_SHADE}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>

        <Panel id="text" title="Text">
          <ul className="ds-rows">
            {FONT_FAMILIES.map((name) => (
              <li key={name} className="ds-row">
                <span className="ds-row__sample" style={{ fontFamily: `var(${name})` }}>
                  The quick brown fox jumps over the lazy dog
                </span>
                <code className="ds-code">{name}</code>
              </li>
            ))}
            {FONT_SIZES.map((name) => (
              <li key={name} className="ds-row">
                <span className="ds-row__sample ds-row__sample--size" style={{ fontSize: `var(${name})` }}>
                  Aa
                </span>
                <code className="ds-code">{name}</code>
              </li>
            ))}
            <li className="ds-row">
              <span className="ds-row__sample">
                <span className="eyebrow">Eyebrow</span>
              </span>
              <code className="ds-code">.eyebrow</code>
            </li>
          </ul>
        </Panel>

        <Panel id="spacing" title="Spacing">
          <ul className="ds-spacing">
            {SPACING.map((name) => (
              <li key={name} className="ds-spacing__item">
                <code className="ds-code">{name}</code>
                <span className="ds-spacing__bar" style={{ width: `var(${name})` }} />
              </li>
            ))}
          </ul>
        </Panel>

        <Panel id="shadows" title="Shadows">
          <ul className="ds-shadows">
            {SHADOWS.map((name) => (
              <li key={name} className="ds-shadows__item">
                <span className="ds-shadows__sample" style={{ boxShadow: `var(${name})` }} />
                <code className="ds-code">{name}</code>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel id="gallery" title="Gallery">
          <Gallery items={galleryItems} />
        </Panel>

        <Panel id="tones" title="Tones" wide>
          <ul className="ds-tones">
            {SECTION_TONES.map((tone) => (
              <li key={tone} className={`ds-tone tone-${tone}`}>
                <span className="ds-tone__heading">Text</span>
                <span className="ds-tone__rule" />
                <code className="ds-code">{tone}</code>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel id="breakpoints" title="Breakpoints" wide>
          <ul className="ds-devices">
            {DEVICES.map(({ breakpoint, device }) => (
              <li key={breakpoint} className={`ds-device ds-device--${device} ds-breakpoint--${breakpoint}`}>
                <span className="ds-device__screen" />
                <span className="ds-device__label">
                  <code className="ds-code">{breakpoint}</code>
                </span>
              </li>
            ))}
          </ul>
          <ul className="ds-breakpoints">
            {BREAKPOINTS.map((name) => (
              <li key={name} className={`ds-breakpoint ds-breakpoint--${name}`}>
                <span className="ds-breakpoint__label">
                  <code className="ds-code">{name}</code>
                </span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel id="buttons" title="Buttons" wide>
          <div className="ds-table-scroll">
            <table className="ds-button-table">
              <thead>
                <tr>
                  <td colSpan={2} />
                  {BUTTON_TYPES.map((type) => (
                    <th key={type} colSpan={BUTTON_ICONS.length} scope="colgroup">
                      {capitalise(type)}
                    </th>
                  ))}
                </tr>
                <tr>
                  <td colSpan={2} />
                  {BUTTON_TYPES.map((type) =>
                    BUTTON_ICONS.map((withIcon) => (
                      <th key={`${type}-${withIcon}`} scope="col" className="ds-code">
                        {withIcon ? 'With icon' : 'No icon'}
                      </th>
                    )),
                  )}
                </tr>
              </thead>
              <tbody>
                {BUTTON_SIZES.map((size) => (
                  <Fragment key={size}>
                    {BUTTON_STATES.map((state, index) => (
                      <tr key={state}>
                        {index === 0 && (
                          <th scope="rowgroup" rowSpan={BUTTON_STATES.length}>
                            {capitalise(size)}
                          </th>
                        )}
                        <th scope="row" className="ds-code">
                          {capitalise(state)}
                        </th>
                        {BUTTON_TYPES.map((type) =>
                          BUTTON_ICONS.map((withIcon) => (
                            <td key={`${type}-${withIcon}`}>
                              <Button
                                variant={type}
                                size={size}
                                icon={withIcon ? <ArrowIcon /> : undefined}
                                disabled={state === 'inactive'}
                                className={STATE_CLASS[state]}
                              >
                                Button
                              </Button>
                            </td>
                          )),
                        )}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel id="cards" title="Cards" wide>
          <ul className="ds-cards">
            <Specimen label="Service card">
              <ServiceCard service={serviceCard} number={1} />
            </Specimen>
            <Specimen label="Event card · upcoming">
              <EventCard event={upcomingEvent} labels={eventLabels} upcomingImage={TEMPLATE_IMAGE} />
            </Specimen>
            <Specimen label="Event card · upcoming, no date">
              <EventCard event={undatedEvent} labels={eventLabels} upcomingImage={TEMPLATE_IMAGE} />
            </Specimen>
            <Specimen label="Event card · past">
              <EventCard event={pastEvent} labels={eventLabels} upcomingImage={TEMPLATE_IMAGE} />
            </Specimen>
            <Specimen label="Article card">
              <InsightCard card={insightCard} />
            </Specimen>
          </ul>
        </Panel>
      </div>
    </main>
  );
};
