/**
 * All copy, links and images for the landing page.
 *
 * Source: docs/answers.md. Wording follows Sophie's own phrases (section 3) and the
 * sourced facts (sections 1, 2 and 4). docs/ai-look-review.md explains the choices.
 * Voice: "I" (Sophie) where it is personal, "we" for the company's services.
 * Search this file for `kind: 'todo'` and `TODO` to find what still needs the owner.
 */
import aboutImage from '../assets/images/about-sophie-guests.jpg';
import clientsDidTheMathsImage from '../assets/images/carousel-clients-did-the-maths.jpg';
import evaluationChecklistImage from '../assets/images/carousel-evaluation-checklist.jpg';
import americanaLogo from '../assets/images/client-americana.svg';
import dubizzleLogo from '../assets/images/client-dubizzle.svg';
import eandLogo from '../assets/images/client-eand.svg';
import qatarEnergyLogo from '../assets/images/client-qatarenergy.svg';
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
    { label: 'Writing', sectionId: 'insights' },
    { label: 'Contact', sectionId: 'contact' },
  ],

  headerCta: { label: 'Book a call', link: bookingLink },

  hero: {
    eyebrow: 'Legal tech & AI advisory',
    // Post 2026-10-13: "Everyone thinks they need AI. Most teams I meet need structure."
    headline: {
      roman: 'Everyone thinks they need AI.',
      italic: 'Most teams I meet need structure.',
    },
    subheadline:
      'I’m Sophie Best. I’ve spent 20 years beside lawyers and inside legal tech companies. Now I help in-house and law firm teams find what’s really slowing them down before they buy anything, and I stay on after go-live until people use it.',
    primaryCta: { label: 'Book an intro call', link: bookingLink },
    secondaryCta: { label: 'See how I work', link: { kind: 'url', href: '#approach' } },
    image: {
      src: heroImage,
      alt: 'Sophie Best speaking on a panel, microphone in hand.',
      width: 800,
      height: 800,
    },
  },

  // Pain points are close to what GCs told Sophie (docs/answers.md, section 2).
  problem: {
    headline: { roman: 'What I hear from GCs' },
    painPoints: [
      'The business wants legal to “do something with AI”. Nobody has said what for.',
      '“The demos all look similar.” CLM? Contract AI? A repository? The categories overlap and nobody explains them.',
      'You bought a tool. Hardly anyone uses it, and nobody can work out why.',
      '“Sales has a pipeline the CFO can see. What does legal have?”',
      'An exec outside legal says “it’s fine, I checked it on Copilot”.',
    ],
    turn: {
      strong: 'Most of this starts before the technology.',
      rest: 'It’s in how work moves through the team and where information lives, so that’s where I look first.',
    },
  },

  services: {
    headline: { roman: 'How we can help' },
    items: [
      {
        title: 'AI & legal tech strategy',
        body: 'We sit with your team and map how work moves today, from intake to sign-off. Then we show where AI, automation or a simple process change would help, before you spend anything.',
      },
      {
        title: 'Tool selection & adoption',
        body: 'A demo shows you the product. A trial shows you the fit. We run trials on your hardest work, inside the systems you already use, ask vendors the awkward questions, and stay after launch to get people using the tool.',
        tagline: 'Go live is the start, not the finish.',
      },
      {
        title: 'Training, workshops & keynotes',
        body: 'Sessions on AI and governance for in-house teams, law firms and conferences. Recent ones include a workshop for Norton Rose Fulbright’s Dubai and Riyadh teams and a session for DIFC Academy’s law course.',
      },
    ],
    also: 'We also help teams make AI governance usable. If the approved route is too cumbersome, people go around it. And we advise legal tech companies on talking the language of lawyers.',
  },

  // The brief's "no vendor commissions" line is left out until the owner confirms it (open question 11).
  // "People. Process. Then AI." is Sophie's Kuwait keynote slide.
  approach: {
    headline: { roman: 'People. Process.', italic: 'Then AI.' },
    steps: [
      {
        title: 'Map',
        body: 'Sit with your team and follow the work through intake, drafting, review, approvals and reporting.',
      },
      {
        title: 'Assess',
        body: 'Find where things get stuck and who needs to be won over. Sometimes the answer isn’t technology at all.',
      },
      {
        title: 'Choose',
        body: 'Know your problem first and every demo becomes a test, not a pitch. Trials run on your hardest tasks, inside the systems you already use.',
      },
      {
        title: 'Embed',
        body: 'Training, playbooks and a named owner after launch. Adoption isn’t a project with an end date.',
      },
    ],
  },

  // TODO: confirm permission to show these client names and logos (open question 13).
  // Logo width and height are each logo's viewBox size; they set its aspect ratio.
  proof: {
    headline: { roman: 'Who I’ve worked with' },
    clientsLabel: 'Clients include',
    clients: [
      { src: americanaLogo, alt: 'Americana', width: 164.4, height: 71 },
      { src: eandLogo, alt: 'e&', width: 530.26, height: 493.52 },
      { src: dubizzleLogo, alt: 'Dubizzle', width: 589.8, height: 184.8 },
      { src: qatarEnergyLogo, alt: 'QatarEnergy', width: 85.57, height: 88.6 },
    ],
    paragraphs: [
      'I’ve spoken at the Kuwait Corporate Legal Summit, the Bespoke Global Legal Summit, LexTalk World, AIJA and LegalTechTalk London.',
      // Post 2026-10-09: 215 registered, 77 declined, "still had a room of at least 130".
      'In October 2026, 215 people registered for our DIFC AI Governance seminar. We had to turn 77 away and still had a room of more than 130.',
    ],
    // TODO: Renato Leite Monteiro quote is marked "permission needed" (open question 16).
    quote: {
      kind: 'todo',
      note: 'Client or peer quote, pending permission (e.g. Renato Leite Monteiro, VP Legal, e&)',
    },
  },

  // TODO: confirm the "coffee meeting, or in the gym" personal touch (open question 22).
  about: {
    headline: { roman: 'Why it’s called', italic: 'The Best Advisory.' },
    paragraphs: [
      'I started out in London, running the tech alongside M&A lawyers at 2am. Then I spent years inside leading legal tech companies, selling it, before moving to Dubai to advise legal teams across the Middle East.',
      'I never trained as a lawyer, but I’ve spent my whole career beside them. When I asked a couple of clients what they think of when they think of my work, they literally said “Sophie Best”. So I finally built a proper brand around it.',
      'I also lead Knowledge Nexus, a legal education platform, and sit on the industry advisory board for Law at Middlesex University Dubai. When I’m not at a DIFC coffee meeting, I’m usually in the gym.',
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
  // Headline from Post 2026-10-15: "No pitches, presentations just good people & conversations".
  events: {
    headline: { roman: 'No pitches.', italic: 'Just good people and conversations.' },
    lead: 'Breakfasts, dinners and seminars for GCs and senior in-house lawyers. Most are in Dubai and Abu Dhabi, and some in London.',
    strands: [
      {
        id: 'legal-table',
        title: 'The Legal Table',
        body: 'Breakfast roundtables for GCs and senior in-house lawyers only.',
        // TODO: update or remove after 17 November 2026 (open question 25).
        note: 'Next: London, 17 November',
      },
      {
        id: 'wellness-brief',
        title: 'The Wellness Brief for Lawyers',
        body: 'A workout, breathwork or a run, then coffee and a talk. Almost 40 people joined the session at Barry’s Dubai Marina.',
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
        body: 'Recent ones: “AI governance: everyone’s doing it. No one’s cracked it.” at DIFC, and a closed roundtable for about 20 GCs at the Four Seasons in Abu Dhabi.',
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
        body: 'Real simulations with dummy data, so you can practise without touching client files. First up is Microsoft Copilot, then Claude.',
        note: 'Coming soon',
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
    headline: { roman: 'Recent writing' },
    lead: 'Articles and carousels I’ve posted on LinkedIn.',
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

  // Low-adoption examples are from Post 2026-10-27.
  faq: {
    headline: { roman: 'Before you get in touch' },
    items: [
      {
        question: 'Do we need AI?',
        answer:
          'Maybe not. It’s not always AI that’s needed. Sometimes it’s straightforward automation or a clearer process, and if so, I’ll tell you.',
      },
      {
        // TODO: confirm how vendor-sponsored events (e.g. Morae) are disclosed (open question 11).
        question: 'Are you tied to any vendor?',
        answer:
          'No. My advice is vendor-neutral, and if a tool doesn’t fit how your team works, I’ll say so.',
      },
      {
        question: 'We already bought a tool and adoption is low. Can you help?',
        answer:
          'Yes. It’s one of the most common reasons people get in touch. Often the tool is fine, but it asks lawyers for data entry or doesn’t connect to their email. That can be fixed.',
      },
      {
        question: 'Do you work with law firms or in-house teams?',
        answer:
          'Both. Most of my advisory work is with in-house teams at corporates, and I run training for law firms. I also work with legal tech companies on go-to-market.',
      },
      {
        // TODO: confirm whether sessions can run remotely.
        question: 'Where do you work?',
        answer:
          'I’m based in Dubai and work across the UAE and the wider Gulf, and I’m in London regularly.',
      },
      {
        // TODO: confirm whether The Best Advisory can offer accredited training directly (open question 10).
        question: 'Is your training accredited?',
        answer: 'Some workshops are CLPD-accredited, through Knowledge Nexus.',
      },
    ],
  },

  // "Where do I start?" is the question GCs ask most (Featured #3).
  contact: {
    headline: { roman: 'Where do you', italic: 'start?' },
    lead: 'It’s the question I hear most from GCs. Book a short call and tell me what’s going on.',
    primaryCta: { label: 'Book an intro call', link: bookingLink },
    email: {
      label: 'Or email us',
      link: { kind: 'todo', note: 'Contact email address (open question 1)' },
    },
    locations: 'Dubai, Abu Dhabi and London',
  },

  footer: {
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
