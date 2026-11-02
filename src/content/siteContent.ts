/**
 * All copy, links and images for the landing page.
 *
 * Source: docs/answers.md (copy from section 6, hero Option A).
 * Search this file for `kind: 'todo'` and `TODO` to find what still needs the owner.
 */
import aboutImage from '../assets/images/about-sophie-guests.jpg';
import clientsDidTheMathsImage from '../assets/images/carousel-clients-did-the-maths.jpg';
import evaluationChecklistImage from '../assets/images/carousel-evaluation-checklist.jpg';
import difcSeminarImage from '../assets/images/event-difc-seminar.jpg';
import difcWelcomeImage from '../assets/images/event-difc-welcome.jpg';
import privateDinnerImage from '../assets/images/event-private-dinner.jpg';
import wellnessBriefImage from '../assets/images/event-wellness-brief.jpg';
import heroImage from '../assets/images/hero-sophie-panel.jpg';
import type { LinkItem, SiteContent, SiteLink } from '../types/content';

const externalLink = (href: string): SiteLink => ({ kind: 'url', href, external: true });

// TODO: booking tool (Calendly, Cal.com, Microsoft Bookings) or enquiry form not chosen yet.
const bookingLink: SiteLink = {
  kind: 'todo',
  note: 'Booking link or enquiry form (open question 1)',
};

const companyLinkedIn: LinkItem = {
  label: 'The Best Advisory on LinkedIn',
  link: externalLink('https://www.linkedin.com/company/the-best-advisory'),
};

const sophieLinkedIn: LinkItem = {
  label: 'Sophie Best on LinkedIn',
  link: externalLink('https://www.linkedin.com/in/sophiebestai'),
};

const knowledgeNexus: LinkItem = {
  label: 'Knowledge Nexus',
  link: externalLink('https://knowledgenexus.ae'),
};

export const siteContent: SiteContent = {
  // TODO: confirm official name, "The Best Advisory" or "Best Advisory" (open question 4).
  brandName: 'The Best Advisory',
  skipLinkLabel: 'Skip to main content',

  nav: [
    { label: 'Services', sectionId: 'services' },
    { label: 'Approach', sectionId: 'approach' },
    { label: 'About', sectionId: 'about' },
    { label: 'Events', sectionId: 'events' },
    { label: 'Insights', sectionId: 'insights' },
    { label: 'Contact', sectionId: 'contact' },
  ],

  headerCta: { label: 'Book a call', link: bookingLink },

  hero: {
    eyebrow: 'Legal tech & AI advisory · Dubai · London',
    headline: {
      roman: 'Everyone thinks they need AI.',
      italic: 'Most legal teams need structure.',
    },
    subheadline:
      'We help in-house and law firm legal teams find the real problem, choose technology that fits how they work, and make it stick. Vendor-neutral, people and process first. Led by Sophie Best.',
    primaryCta: { label: 'Book an intro call', link: bookingLink },
    secondaryCta: { label: 'See how we work', link: { kind: 'url', href: '#approach' } },
    image: {
      src: heroImage,
      alt: 'Sophie Best speaking on a panel, microphone in hand.',
      width: 800,
      height: 800,
    },
  },

  // TODO: confirm permission to name these clients (open question 13). Names only, no logos.
  trustStrip: {
    experience: '20+ years in legal technology',
    clientsIntro: 'Trusted by legal teams at',
    clients: ['Americana', 'e&', 'Dubizzle', 'QatarEnergy'],
  },

  problem: {
    eyebrow: 'The problem',
    headline: { roman: 'Sound', italic: 'familiar?' },
    painPoints: [
      'The business wants you to “do something with AI”, but nobody has said what problem it should solve.',
      'Every demo looks the same, and CLM, contract AI and “legal front doors” all blur together.',
      'You bought a tool. Hardly anyone uses it.',
      'The board wants numbers on what legal does. You have anecdotes.',
      'Someone outside legal has already “checked it on Copilot”.',
    ],
    turn: {
      strong: 'Most teams don’t start with a technology problem.',
      rest: 'They start with unclear processes, scattered information and pressure to move fast. That’s where we start too.',
    },
  },

  services: {
    eyebrow: 'Services',
    headline: { roman: 'What we', italic: 'do.' },
    items: [
      {
        number: '01',
        title: 'AI & legal tech strategy',
        body: 'We map how your team actually works, find what’s costing you most, and show where AI, automation or simply a better process will help, before you spend anything.',
      },
      {
        number: '02',
        title: 'Tool selection & adoption',
        body: 'Vendor-neutral support from shortlist to go-live and beyond: real trials on your hardest work, the right questions for vendors, and change management that gets people using it.',
        tagline: 'Go-live is the start, not the finish.',
      },
      {
        number: '03',
        title: 'Training, workshops & keynotes',
        body: 'Practical sessions on AI, governance and the future-ready legal team, for in-house teams, law firms and conferences. Some sessions carry CLPD accreditation.',
      },
    ],
    alsoLabel: 'Also',
    also: ['AI governance that works in practice', 'Go-to-market advice for legal tech companies'],
  },

  // The brief's "no vendor commissions" line is left out until the owner confirms it (open question 11).
  approach: {
    eyebrow: 'Our approach',
    headline: { roman: 'People. Process.', italic: 'Then AI.' },
    steps: [
      {
        number: '01',
        title: 'Map',
        body: 'Sit with your team and trace the real workflow: intake, drafting, review, approvals, reporting.',
      },
      {
        number: '02',
        title: 'Assess',
        body: 'Find the bottlenecks and the stakeholders who need to be won over. Decide where technology adds value and where it doesn’t.',
      },
      {
        number: '03',
        title: 'Choose',
        body: 'Compare options neutrally. Run trials on your hardest tasks, inside the systems you already use.',
      },
      {
        number: '04',
        title: 'Embed',
        body: 'Train, build playbooks, set ownership and measure. Adoption doesn’t stop at launch.',
      },
    ],
  },

  proof: {
    eyebrow: 'Proof',
    headline: { roman: '20 years beside lawyers,', italic: 'and the room to prove it.' },
    stats: [
      { value: '20+', label: 'years in legal tech' },
      { value: '130+', label: 'legal leaders at our DIFC AI Governance seminar' },
      { value: '25k+', label: 'LinkedIn followers' },
    ],
    spokenAtLabel: 'Spoken at',
    spokenAt: [
      'Kuwait Corporate Legal Summit',
      'Bespoke Global Legal Summit',
      'LexTalk World',
      'AIJA',
      'LegalTechTalk London',
    ],
    // TODO: Renato Leite Monteiro quote is marked "permission needed" (open question 16).
    quote: {
      kind: 'todo',
      note: 'Client or peer quote, pending permission (e.g. Renato Leite Monteiro, VP Legal, e&)',
    },
  },

  // TODO: confirm the "coffee meeting, or in the gym" personal touch (open question 22).
  about: {
    eyebrow: 'About Sophie',
    headline: { roman: 'The Best Advisory,', italic: 'led by Sophie Best.' },
    paragraphs: [
      'Sophie Best started out two decades ago in London, running deal technology alongside M&A lawyers through the night. She went on to spend years inside leading legal tech companies before moving to Dubai and advising legal teams across the Middle East.',
      'She never trained as a lawyer, but she has spent her whole career beside them, learning what lawyers need, often before they know it themselves. When she asked clients what they thought of when they thought of her work, they said “Sophie Best”. The Best Advisory puts a name on that.',
      'Sophie also leads Knowledge Nexus, a legal education platform, and sits on the industry advisory board for Law at Middlesex University Dubai. You’ll usually find her at a DIFC coffee meeting, or in the gym.',
    ],
    links: [knowledgeNexus, sophieLinkedIn],
    image: {
      src: aboutImage,
      alt: 'Sophie Best laughing with guests at an event.',
      width: 1280,
      height: 720,
      focus: '56% 30%',
    },
  },

  // TODO: confirm permission from the people shown in event photos (open question 19).
  events: {
    eyebrow: 'Events & community',
    headline: {
      roman: 'What we do isn’t events.',
      italic: 'It’s bringing the legal community together.',
    },
    lead: 'No selling, no pitching: just the right people around the table.',
    strands: [
      {
        id: 'legal-table',
        title: 'The Legal Table',
        meta: 'Breakfast roundtables',
        body: 'Breakfast roundtables for GCs and senior in-house lawyers.',
        // TODO: update or remove after 17 November 2026 (open question 25).
        note: 'Next: London, 17 November',
      },
      {
        id: 'wellness-brief',
        title: 'The Wellness Brief for Lawyers',
        meta: 'Move · recover · connect',
        body: 'Move, recover, connect. Networking on the mat, not at the bar.',
        image: {
          src: wellnessBriefImage,
          alt: 'Group photo of The Wellness Brief participants at Barry’s Dubai Marina.',
          width: 1189,
          height: 783,
          focus: '50% 40%',
        },
      },
      {
        id: 'seminars',
        title: 'Seminars & roundtables',
        meta: 'Dubai · Abu Dhabi',
        body: 'Practical sessions on AI governance and more, in Dubai and Abu Dhabi.',
        image: {
          src: difcSeminarImage,
          alt: 'Panellists on stage at the DIFC AI Governance seminar.',
          width: 480,
          height: 853,
          focus: '50% 2%',
        },
      },
      {
        id: 'practice-lab',
        title: 'Legal AI Practice Lab',
        meta: 'Coming soon',
        body: 'Hands-on simulations with realistic dummy data. Try Copilot and Claude without touching sensitive files.',
      },
    ],
    gallery: [
      {
        image: {
          src: difcWelcomeImage,
          alt: 'Sophie Best greeting guests at the DIFC AI Governance seminar.',
          width: 627,
          height: 468,
          focus: '30% 50%',
        },
        caption: 'Welcoming guests to the DIFC AI Governance seminar',
      },
      {
        image: {
          src: privateDinnerImage,
          alt: 'Guests at a senior legal private dinner at Atlantis The Royal, Dubai, at night.',
          width: 1280,
          height: 1706,
          focus: '50% 62%',
        },
        caption: 'A senior legal private dinner at Atlantis The Royal',
      },
    ],
    ctas: [
      {
        label: 'Join the events list',
        link: { kind: 'todo', note: 'Luma calendar or mailing list (open question 2)' },
      },
      {
        label: 'Join the Practice Lab waitlist',
        link: { kind: 'todo', note: 'Practice Lab waitlist destination (open question 3)' },
      },
    ],
  },

  insights: {
    eyebrow: 'Insights',
    headline: { roman: 'Thinking out loud', italic: 'on AI, legal ops and adoption.' },
    linkLabel: 'Read on LinkedIn',
    cards: [
      {
        id: 'legal-ops-before-ai',
        kind: 'Article',
        title: 'Legal Ops Before AI: Why You Can’t Run Before You Can Walk',
        date: '2025-08-13',
        link: externalLink(
          'https://www.linkedin.com/pulse/legal-ops-before-ai-why-you-cant-run-can-walk-sophie-best-vhcjf/',
        ),
      },
      {
        id: 'culture-eats-strategy',
        kind: 'Article',
        title: 'Legal Tech Adoption: Why Culture Eats Strategy (and AI) for Breakfast',
        date: '2025-08-26',
        link: externalLink(
          'https://www.linkedin.com/pulse/legal-tech-adoption-why-culture-eats-strategy-ai-breakfast-best-hbqgf/',
        ),
      },
      {
        id: 'ai-in-ma',
        kind: 'Article',
        title: 'Leveraging AI in M&A: Lessons from GCs on the Frontlines',
        date: '2025-09-10',
        link: externalLink(
          'https://www.linkedin.com/pulse/leveraging-ai-ma-lessons-from-gcs-frontlines-sophie-best-babaf/',
        ),
      },
      {
        id: 'evaluation-checklist',
        kind: 'Carousel',
        title: 'Legal Technology Evaluation Checklist',
        date: '2026-10-26',
        link: externalLink(
          'https://www.linkedin.com/feed/update/urn:li:ugcPost:7520390574865170432/',
        ),
        image: {
          src: evaluationChecklistImage,
          alt: '',
          width: 390,
          height: 487,
        },
      },
      {
        id: 'clients-did-the-maths',
        kind: 'Carousel',
        title: 'Clients did the maths',
        date: '2026-10-28',
        link: externalLink(
          'https://www.linkedin.com/feed/update/urn:li:ugcPost:7521119788316942336/',
        ),
        image: {
          src: clientsDidTheMathsImage,
          alt: '',
          width: 480,
          height: 480,
        },
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    headline: { roman: 'Questions,', italic: 'answered.' },
    items: [
      {
        question: 'Do we need AI?',
        answer:
          'Maybe not. Sometimes the fix is a clearer process or simple automation. We’ll tell you.',
      },
      {
        // TODO: confirm how vendor-sponsored events (e.g. Morae) are disclosed (open question 11).
        question: 'Are you tied to any vendor?',
        answer: 'No. Our advice is vendor-neutral.',
      },
      {
        question: 'We already bought a tool and adoption is low. Can you help?',
        answer: 'Yes. This is one of the most common reasons teams call us.',
      },
      {
        question: 'Do you work with law firms or in-house teams?',
        answer: 'Both, as well as corporates and legal tech companies.',
      },
      {
        // TODO: confirm whether sessions can run remotely.
        question: 'Where do you work?',
        answer:
          'We’re based in Dubai and work across the UAE, the wider Middle East and London.',
      },
      {
        // TODO: confirm whether The Best Advisory can offer accredited training directly (open question 10).
        question: 'Is your training accredited?',
        answer: 'Selected workshops are CLPD-accredited through Knowledge Nexus.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    headline: { roman: 'Where do you', italic: 'start?' },
    lead: 'That’s the question we hear most. Let’s work it out together.',
    primaryCta: { label: 'Book an intro call', link: bookingLink },
    email: {
      label: 'Email us',
      link: { kind: 'todo', note: 'Contact email address (open question 1)' },
    },
    social: [companyLinkedIn, sophieLinkedIn],
    locations: ['Dubai', 'Abu Dhabi', 'London'],
    regionLine: 'Working with legal teams across the Middle East and beyond.',
  },

  footer: {
    tagline: 'People. Process. Then AI.',
    links: [
      companyLinkedIn,
      sophieLinkedIn,
      knowledgeNexus,
      {
        label: 'Privacy',
        link: { kind: 'todo', note: 'Privacy policy (open question 24)' },
      },
    ],
    copyright: '© 2026 The Best Advisory',
  },
};
