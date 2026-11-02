/** Surface tones defined in src/styles/tokens.css as `.tone-*` classes. */
export const SECTION_TONES = ['ivory', 'cream', 'paper', 'espresso'] as const;

export type SectionTone = (typeof SECTION_TONES)[number];
