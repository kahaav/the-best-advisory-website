/**
 * Types for the landing page content in `src/content/siteContent.ts`.
 */

/** A link is either a known URL or a TODO that still needs a real destination. */
export type SiteLink =
  | {
      readonly kind: 'url';
      readonly href: string;
      /** External links open in a new tab and say so. */
      readonly external?: boolean;
    }
  | {
      readonly kind: 'todo';
      /** What is missing, for the owner. */
      readonly note: string;
    };

export interface LinkItem {
  readonly label: string;
  readonly link: SiteLink;
}

/** A heading in two parts: a plain first part and an optional second part set in the accent colour. */
export interface Headline {
  readonly roman: string;
  readonly italic?: string;
}

export interface ImageAsset {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  /** CSS `object-position` used when the image is cropped to a frame. */
  readonly focus?: string;
}

export interface NavItem {
  readonly label: string;
  readonly sectionId: SectionId;
}

export type SectionId =
  | 'problem'
  | 'services'
  | 'approach'
  | 'proof'
  | 'about'
  | 'events'
  | 'insights'
  | 'faq'
  | 'contact';

export interface SectionIntro {
  /** Small caps label above the headline. Most sections leave it out. */
  readonly eyebrow?: string;
  readonly headline: Headline;
  readonly lead?: string;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly headline: Headline;
  readonly subheadline: string;
  readonly primaryCta: LinkItem;
  readonly secondaryCta: LinkItem;
  readonly image: ImageAsset;
  /** Small link at the foot of the hero that jumps to the next section. */
  readonly scrollCue: LinkItem;
}

/** A short quote shown as a speech bubble, with who said it. */
export interface ProblemQuote {
  readonly text: string;
  readonly speaker: string;
}

export interface ProblemContent extends SectionIntro {
  readonly quotes: readonly ProblemQuote[];
  readonly turn: {
    readonly strong: string;
    readonly rest: string;
  };
}

export interface ServiceItem {
  readonly title: string;
  readonly body: string;
  readonly tagline?: string;
}

export interface ServicesContent extends SectionIntro {
  readonly items: readonly ServiceItem[];
  /** One sentence on the secondary services. */
  readonly also: string;
}

export interface ApproachStep {
  readonly title: string;
  readonly body: string;
}

export interface ApproachContent extends SectionIntro {
  /** Shown before each step's number, e.g. "Phase 1". */
  readonly phaseLabel: string;
  readonly steps: readonly ApproachStep[];
}

/** A quote can only be shown once permission is confirmed. */
export type QuoteContent =
  | {
      readonly kind: 'quote';
      readonly text: string;
      readonly name: string;
      readonly role: string;
    }
  | {
      readonly kind: 'todo';
      readonly note: string;
    };

export interface ProofContent extends SectionIntro {
  /** Client logos. `alt` is the client name. */
  readonly clients: readonly ImageAsset[];
  readonly quote: QuoteContent;
}

export interface AboutContent extends SectionIntro {
  readonly paragraphs: readonly string[];
  readonly links: readonly LinkItem[];
  readonly image: ImageAsset;
}

interface EventBase {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  /** Where it is or was held, e.g. "London". */
  readonly place?: string;
}

/**
 * An event still to come, shown on a template image with its date, or "Coming
 * soon" when there is no date yet. Past events show a photo.
 */
export type EventStrand =
  | (EventBase & {
      readonly kind: 'upcoming';
      /** ISO date, e.g. 2026-11-17. */
      readonly date?: string;
    })
  | (EventBase & {
      readonly kind: 'past';
      readonly image: ImageAsset;
    });

export interface EventCardLabels {
  /** Shown above the title. */
  readonly upcoming: string;
  readonly past: string;
  /** Shown on the image of an upcoming event with no date. */
  readonly comingSoon: string;
}

export interface CaptionedImage {
  readonly image: ImageAsset;
  readonly caption: string;
}

export interface EventsContent extends SectionIntro {
  /** Upcoming events first, then past ones. */
  readonly strands: readonly EventStrand[];
  readonly cardLabels: EventCardLabels;
  /** The template image behind an upcoming event's date. */
  readonly upcomingImage: ImageAsset;
  readonly gallery: readonly CaptionedImage[];
  readonly ctas: readonly LinkItem[];
}

export interface ArticleCard {
  readonly id: string;
  /** Short topic label shown above the title. */
  readonly topic: string;
  readonly title: string;
  /** One-sentence summary. */
  readonly excerpt: string;
  /** ISO date, e.g. 2025-08-13. */
  readonly date: string;
  readonly readingMinutes: number;
  readonly link: SiteLink;
  readonly image: ImageAsset;
}

export interface InsightsContent extends SectionIntro {
  readonly cards: readonly ArticleCard[];
  readonly allLink: LinkItem;
  /** Accessible names for the carousel arrows and dots. */
  readonly previousLabel: string;
  readonly nextLabel: string;
  /** Dot label, followed by "2 / 3". */
  readonly positionLabel: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface FaqContent extends SectionIntro {
  readonly items: readonly FaqItem[];
}

export interface ContactContent extends SectionIntro {
  readonly primaryCta: LinkItem;
  readonly email: LinkItem;
  readonly locations: string;
}

export interface FooterContent {
  readonly links: readonly LinkItem[];
  readonly copyright: string;
  readonly backToTop: LinkItem;
}

export interface SiteContent {
  readonly brandName: string;
  readonly skipLinkLabel: string;
  readonly nav: readonly NavItem[];
  readonly headerCta: LinkItem;
  readonly hero: HeroContent;
  readonly problem: ProblemContent;
  readonly services: ServicesContent;
  readonly approach: ApproachContent;
  readonly proof: ProofContent;
  readonly about: AboutContent;
  readonly events: EventsContent;
  readonly insights: InsightsContent;
  readonly faq: FaqContent;
  readonly contact: ContactContent;
  readonly footer: FooterContent;
}
