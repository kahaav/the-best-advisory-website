import { AboutSection } from '../components/AboutSection';
import { ApproachSection } from '../components/ApproachSection';
import { ContactSection } from '../components/ContactSection';
import { EventsSection } from '../components/EventsSection';
import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { InsightsSection } from '../components/InsightsSection';
import { ProblemSection } from '../components/ProblemSection';
import { ProofSection } from '../components/ProofSection';
import { ServicesSection } from '../components/ServicesSection';
import { TrustStrip } from '../components/TrustStrip';
import { siteContent } from '../content/siteContent';

export const HomePage = () => {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        {siteContent.skipLinkLabel}
      </a>
      <Header
        brandName={siteContent.brandName}
        nav={siteContent.nav}
        cta={siteContent.headerCta}
      />
      <main id="main" tabIndex={-1}>
        <Hero content={siteContent.hero} />
        <TrustStrip content={siteContent.trustStrip} />
        <ProblemSection content={siteContent.problem} />
        <ServicesSection content={siteContent.services} />
        <ApproachSection content={siteContent.approach} />
        <ProofSection content={siteContent.proof} />
        <AboutSection content={siteContent.about} />
        <EventsSection content={siteContent.events} />
        <InsightsSection content={siteContent.insights} />
        <FaqSection content={siteContent.faq} />
        <ContactSection content={siteContent.contact} />
      </main>
      <Footer brandName={siteContent.brandName} content={siteContent.footer} />
    </div>
  );
};
