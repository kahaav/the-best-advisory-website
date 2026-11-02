import type { ReactNode } from 'react';
import '@components/ui/Section.css';
import type { SectionTone } from '@components/ui/tones';

interface SectionProps {
  id: string;
  tone: SectionTone;
  labelledBy: string;
  className?: string;
  children: ReactNode;
}

/** A full-width page section with a colour tone and a centred content container. */
export const Section = ({ id, tone, labelledBy, className, children }: SectionProps) => {
  const classes = ['page-section', `tone-${tone}`, className].filter(Boolean).join(' ');

  return (
    <section id={id} className={classes} aria-labelledby={labelledBy}>
      <div className="container">{children}</div>
    </section>
  );
};
