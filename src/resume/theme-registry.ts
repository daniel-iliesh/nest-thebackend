export type ResumeThemeConfig = {
  packageName: string;
  aliases?: readonly string[];
};

export const RESUME_THEME_REGISTRY = {
  'academic-cv-lite': {
    packageName: 'jsonresume-theme-academic-cv-lite',
    aliases: ['jsonresume-theme-academic-cv-lite'],
  },
  'architects-portfolio': {
    packageName: 'jsonresume-theme-architects-portfolio',
    aliases: ['jsonresume-theme-architects-portfolio'],
  },
  'asymmetric-timeline': {
    packageName: 'jsonresume-theme-asymmetric-timeline',
    aliases: ['jsonresume-theme-asymmetric-timeline'],
  },
  'berlin-grid': {
    packageName: 'jsonresume-theme-berlin-grid',
    aliases: ['jsonresume-theme-berlin-grid'],
  },
  'bold-header-statement': {
    packageName: 'jsonresume-theme-bold-header-statement',
    aliases: ['jsonresume-theme-bold-header-statement'],
  },
  'californian-warm': {
    packageName: 'jsonresume-theme-californian-warm',
    aliases: ['jsonresume-theme-californian-warm'],
  },
  'coastal-creative': {
    packageName: 'jsonresume-theme-coastal-creative',
    aliases: ['jsonresume-theme-coastal-creative'],
  },
  'community-garden': {
    packageName: 'jsonresume-theme-community-garden',
    aliases: ['jsonresume-theme-community-garden'],
  },
  'consultant-polished': {
    packageName: 'jsonresume-theme-consultant-polished',
    aliases: ['jsonresume-theme-consultant-polished'],
  },
  'creative-studio': {
    packageName: 'jsonresume-theme-creative-studio',
    aliases: ['jsonresume-theme-creative-studio'],
  },
  'data-driven': {
    packageName: 'jsonresume-theme-data-driven',
    aliases: ['jsonresume-theme-data-driven'],
  },
  'desert-modern': {
    packageName: 'jsonresume-theme-desert-modern',
    aliases: ['jsonresume-theme-desert-modern'],
  },
  'developer-mono': {
    packageName: 'jsonresume-theme-developer-mono',
    aliases: ['jsonresume-theme-developer-mono'],
  },
  'diagonal-accent-bar': {
    packageName: 'jsonresume-theme-diagonal-accent-bar',
    aliases: ['jsonresume-theme-diagonal-accent-bar'],
  },
  'executive-slate': {
    packageName: 'jsonresume-theme-executive-slate',
    aliases: ['jsonresume-theme-executive-slate'],
  },
  flat: {
    packageName: 'jsonresume-theme-flat',
    aliases: ['jsonresume-theme-flat'],
  },
  'french-atelier': {
    packageName: 'jsonresume-theme-french-atelier',
    aliases: ['jsonresume-theme-french-atelier'],
  },
  'government-standard': {
    packageName: 'jsonresume-theme-government-standard',
    aliases: ['jsonresume-theme-government-standard'],
  },
  'graph-paper-grid': {
    packageName: 'jsonresume-theme-graph-paper-grid',
    aliases: ['jsonresume-theme-graph-paper-grid'],
  },
  'investor-brief': {
    packageName: 'jsonresume-theme-investor-brief',
    aliases: ['jsonresume-theme-investor-brief'],
  },
  'london-bureau': {
    packageName: 'jsonresume-theme-london-bureau',
    aliases: ['jsonresume-theme-london-bureau'],
  },
  'marketing-narrative': {
    packageName: 'jsonresume-theme-marketing-narrative',
    aliases: ['jsonresume-theme-marketing-narrative'],
  },
  'mid-century-resume': {
    packageName: 'jsonresume-theme-mid-century-resume',
    aliases: ['jsonresume-theme-mid-century-resume'],
  },
  'minimalist-grid': {
    packageName: 'jsonresume-theme-minimalist-grid',
    aliases: ['jsonresume-theme-minimalist-grid'],
  },
  'modern-classic': {
    packageName: 'jsonresume-theme-modern-classic',
    aliases: ['jsonresume-theme-modern-classic'],
  },
  'monochrome-noir': {
    packageName: 'jsonresume-theme-monochrome-noir',
    aliases: ['jsonresume-theme-monochrome-noir'],
  },
  'new-york-editorial': {
    packageName: 'jsonresume-theme-new-york-editorial',
    aliases: ['jsonresume-theme-new-york-editorial'],
  },
  'nordic-minimal': {
    packageName: 'jsonresume-theme-nordic-minimal',
    aliases: ['jsonresume-theme-nordic-minimal'],
  },
  'operations-precision': {
    packageName: 'jsonresume-theme-operations-precision',
    aliases: ['jsonresume-theme-operations-precision'],
  },
  'pacific-horizon': {
    packageName: 'jsonresume-theme-pacific-horizon',
    aliases: ['jsonresume-theme-pacific-horizon'],
  },
  'product-manager-canvas': {
    packageName: 'jsonresume-theme-product-manager-canvas',
    aliases: ['jsonresume-theme-product-manager-canvas'],
  },
  professional: {
    packageName: 'jsonresume-theme-professional',
    aliases: ['jsonresume-theme-professional'],
  },
  reference: {
    packageName: 'jsonresume-theme-reference',
    aliases: ['jsonresume-theme-reference'],
  },
  'sales-hunter': {
    packageName: 'jsonresume-theme-sales-hunter',
    aliases: ['jsonresume-theme-sales-hunter'],
  },
  sidebar: {
    packageName: 'jsonresume-theme-sidebar',
    aliases: ['jsonresume-theme-sidebar'],
  },
  'sidebar-photo-strip': {
    packageName: 'jsonresume-theme-sidebar-photo-strip',
    aliases: ['jsonresume-theme-sidebar-photo-strip'],
  },
  stackoverflow: {
    packageName: 'jsonresume-theme-stackoverflow',
    aliases: ['jsonresume-theme-stackoverflow'],
  },
  tailwind: {
    packageName: 'jsonresume-theme-tailwind',
    aliases: ['jsonresume-theme-tailwind'],
  },
  'tokyo-modernist': {
    packageName: 'jsonresume-theme-tokyo-modernist',
    aliases: ['jsonresume-theme-tokyo-modernist'],
  },
  'two-column-modernist': {
    packageName: 'jsonresume-theme-two-column-modernist',
    aliases: ['jsonresume-theme-two-column-modernist'],
  },
  'typewriter-modern': {
    packageName: 'jsonresume-theme-typewriter-modern',
    aliases: ['jsonresume-theme-typewriter-modern'],
  },
  'university-first': {
    packageName: 'jsonresume-theme-university-first',
    aliases: ['jsonresume-theme-university-first'],
  },
  'urban-techno': {
    packageName: 'jsonresume-theme-urban-techno',
    aliases: ['jsonresume-theme-urban-techno'],
  },
  'writers-portfolio': {
    packageName: 'jsonresume-theme-writers-portfolio',
    aliases: ['jsonresume-theme-writers-portfolio'],
  },
  simple: {
    packageName: 'jsonresume-theme-simple',
    aliases: ['jsonresume-theme-simple'],
  },
} as const satisfies Record<string, ResumeThemeConfig>;

export const DEFAULT_RESUME_THEME = 'consultant-polished' as const;

export type ResumeThemeKey = keyof typeof RESUME_THEME_REGISTRY;
