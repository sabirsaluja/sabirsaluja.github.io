// Single source of truth for identity, navigation, and profile links.

export const person = {
  name: 'Sabir Saluja',
  credential: 'MD',
  fullName: 'Sabir Saluja, MD',
  title: 'Radiology Resident',
  jobTitle: 'Resident Physician, Diagnostic Radiology',
  institution: 'Montefiore Medical Center',
  location: 'Bronx, New York',
  email: 'sabir.saluja@montefiore.org',
};

// Profile links. Leave a URL empty until it exists. Empty entries are hidden
// everywhere and left out of the JSON-LD `sameAs` list.
export const profiles: { label: string; url: string }[] = [
  { label: 'Doximity', url: '' },
  { label: 'LinkedIn', url: '' },
  { label: 'ORCID', url: '' },
  { label: 'Google Scholar', url: '' },
  { label: 'Montefiore profile', url: '' },
].filter((p) => p.url);

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About & CV' },
  { href: '/publications/', label: 'Publications' },
  { href: '/presentations/', label: 'Presentations' },
  { href: '/contact/', label: 'Contact' },
];

export const disclaimer =
  'This site is for informational purposes and is not medical advice. I cannot provide individual medical consultations.';
