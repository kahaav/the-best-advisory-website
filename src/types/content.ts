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

/** Carousel-style heading: a roman first part and an optional italic second part. */
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
  readonly eyebrow: string;
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
}

export interface TrustStripContent {
  readonly experience: string;
  readonly clientsIntro: string;
  readonly clients: readonly string[];
}

export interface ProblemContent extends SectionIntro {
  readonly painPoints: readonly string[];
  readonly turn: {
    readonly strong: string;
    readonly rest: string;
  };
}

export interface ServiceItem {
  readonly number: string;
  readonly title: string;
  readonly body: string;
  readonly tagline?: string;
}

export interface ServicesContent extends SectionIntro {
  readonly items: readonly ServiceItem[];
  readonly alsoLabel: string;
  readonly also: readonly string[];
}

export interface ApproachStep {
  readonly number: string;
  readonly title: string;
  readonly body: string;
}

export interface ApproachContent extends SectionIntro {
  readonly steps: readonly ApproachStep[];
}

export interface Stat {
  readonly value: string;
  readonly label: string;
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
  readonly stats: readonly Stat[];
  readonly spokenAtLabel: string;
  readonly spokenAt: readonly string[];
  readonly quote: QuoteContent;
}

export interface AboutContent extends SectionIntro {
  readonly paragraphs: readonly string[];
  readonly links: readonly LinkItem[];
  readonly image: ImageAsset;
}

export interface EventStrand {
  readonly id: string;
  readonly title: string;
  readonly meta: string;
  readonly body: string;
  readonly note?: string;
  readonly image?: ImageAsset;
}

export interface CaptionedImage {
  readonly image: ImageAsset;
  readonly caption: string;
}

export interface EventsContent extends SectionIntro {
  readonly strands: readonly EventStrand[];
  readonly gallery: readonly CaptionedImage[];
  readonly ctas: readonly LinkItem[];
}

export interface ArticleCard {
  readonly id: string;
  readonly kind: 'Article' | 'Carousel';
  readonly title: string;
  readonly date: string;
  readonly link: SiteLink;
  readonly image?: ImageAsset;
}

export interface InsightsContent extends SectionIntro {
  readonly cards: readonly ArticleCard[];
  readonly linkLabel: string;
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
  readonly social: readonly LinkItem[];
  readonly locations: readonly string[];
  readonly regionLine: string;
}

export interface FooterContent {
  readonly tagline: string;
  readonly links: readonly LinkItem[];
  readonly copyright: string;
}

export interface SiteContent {
  readonly brandName: string;
  readonly skipLinkLabel: string;
  readonly nav: readonly NavItem[];
  readonly headerCta: LinkItem;
  readonly hero: HeroContent;
  readonly trustStrip: TrustStripContent;
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
