interface ChevronIconProps {
  direction: 'left' | 'right';
}

/** Lucide's chevron-left / chevron-right (ISC licence), drawn inline in the current text colour. */
export const ChevronIcon = ({ direction }: ChevronIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
    </svg>
  );
};
