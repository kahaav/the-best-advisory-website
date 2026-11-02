/** Surface tones defined in src/styles/tokens.css as `.tone-*` classes. */
export const SECTION_TONES = ['sand', 'ink'] as const;

export type SectionTone = (typeof SECTION_TONES)[number];
