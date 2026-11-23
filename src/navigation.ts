import { getPermalink, getBlogPermalink } from './utils/permalinks';

const github = 'https://github.com/Nezarbr';
const linkedin = 'https://www.linkedin.com/in/nezar-boujida/';

export const headerData = {
  links: [
    { text: 'Projects', href: getPermalink('/#projects') },
    { text: 'Experience', href: getPermalink('/#experience') },
    { text: 'Skills', href: getPermalink('/#skills') },
    { text: 'Blog', href: getBlogPermalink() },
  ],
  actions: [{ text: 'GitHub', href: github, target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: github },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: linkedin },
  ],
  footNote: `
    Nezar Boujida · Data Scientist
  `,
};
