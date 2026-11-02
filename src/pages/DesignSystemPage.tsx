import { Fragment, type ReactNode } from 'react';
import templateImage from '../assets/images/template.svg';
import { EventCard } from '../components/cards/EventCard';
import { InsightCard } from '../components/cards/InsightCard';
import { ServiceCard } from '../components/cards/ServiceCard';
import { Gallery } from '../components/Gallery';
import { ArrowIcon } from '../components/ui/ArrowIcon';
import { Button, type ButtonSize } from '../components/ui/Button';
import { SECTION_TONES } from '../components/ui/tones';
import type { ArticleCard, EventStrand, ImageAsset } from '../types/content';
import './DesignSystemPage.css';

/*
 * A static style guide. Every preview reads the design tokens through var()
 * and uses the shared components, so it changes when they change.
 * All copy and images below are templates, not site content.
 */

const COLOURS = ['espresso', 'taupe', 'ivory', 'cream', 'paper'] as const;

const SHADES = [100, 200, 300, 400, 500] as const;

const FONT_FAMILIES = ['--font-display', '--font-text', '--font-mono'] as const;

const FONT_SIZES = [
  '--text-display',
  '--text-h2',
  '--text-h3',
  '--text-lead',
  '--text-body',
  '--text-small',
  '--text-eyebrow',
] as const;

const SPACING = Array.from({ length: 10 }, (_, index) => `--space-${index + 1}`);

/** Each name has a matching `--breakpoint-*` token and a `.ds-breakpoint--*` class. */
const BREAKPOINTS = ['wide', 'nav', 'tablet', 'footer', 'small', 'mobile', 'mobile-small'] as const;

const DEVICES = [
  { breakpoint: 'mobile-small', device: 'phone' },
  { breakpoint: 'mobile', device: 'phone' },
  { breakpoint: 'small', device: 'tablet' },
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

const serviceCard = { number: '01', title: 'Card title', body: TEMPLATE_BODY, tagline: 'Optional tagline' };

const photoEvent: EventStrand = {
  id: 'photo',
  title: 'Card title',
  meta: 'Meta · Detail',
  body: TEMPLATE_BODY,
  image: TEMPLATE_IMAGE,
};

const tileEvent: EventStrand = {
  id: 'tile',
  title: 'Card title',
  meta: 'Meta · Detail',
  body: TEMPLATE_BODY,
  note: 'Optional note',
};

const insightCard = (kind: ArticleCard['kind']): ArticleCard => ({
  id: kind,
  kind,
  title: 'Card title that may run onto a second line',
  date: '2025-01-01',
  link: { kind: 'url', href: '#' },
  image: kind === 'Carousel' ? TEMPLATE_IMAGE : undefined,
});

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

/** One labelled cell in the cards grid. */
const Specimen = ({ label, wide = false, children }: SpecimenProps) => (
  <li className={wide ? 'ds-specimen ds-specimen--wide' : 'ds-specimen'}>
    <span className="ds-code">{label}</span>
    {children}
  </li>
);

export const DesignSystemPage = () => {
  return (
    <main className="ds-page tone-ivory">
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
                      <span
                        className="ds-shade"
                        title={`--color-${colour}-${shade}`}
                        style={{ background: `var(--color-${colour}-${shade})` }}
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

        <Panel id="gallery" title="Gallery">
          <Gallery items={galleryItems} />
        </Panel>

        <Panel id="tones" title="Tones" wide>
          <ul className="ds-tones">
            {SECTION_TONES.map((tone) => (
              <li key={tone} className={`ds-tone tone-${tone}`}>
                <span className="ds-tone__heading">Aa</span>
                <span className="ds-tone__muted">Muted</span>
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
              <ServiceCard service={serviceCard} />
            </Specimen>
            <Specimen label="Event card · photo">
              <EventCard event={photoEvent} />
            </Specimen>
            <Specimen label="Event card · no photo">
              <EventCard event={tileEvent} />
            </Specimen>
            <Specimen label="Article card">
              <InsightCard card={insightCard('Article')} linkLabel="Read more" />
            </Specimen>
            <Specimen label="Carousel card" wide>
              <InsightCard card={insightCard('Carousel')} linkLabel="Read more" />
            </Specimen>
          </ul>
        </Panel>
      </div>
    </main>
  );
};
