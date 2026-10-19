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
  { label: 'Doximity', url: 'https://www.doximity.com/pub/sabir-saluja-md' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sabir-saluja-685933a9/' },
  { label: 'ORCID', url: '' },
  { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=rHTdnUQAAAAJ' },
  { label: 'Montefiore profile', url: '' },
].filter((p) => p.url);

/** Redacted CV (no phone number). Regenerate from source-material/ when the CV changes. */
export const cvUrl = '/cv/Sabir-Saluja-MD-CV.pdf';

export const nav: { href: string; label: string; newTab?: boolean }[] = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: cvUrl, label: 'CV', newTab: true },
  { href: '/publications/', label: 'Publications' },
  { href: '/presentations/', label: 'Presentations' },
  { href: '/contact/', label: 'Contact' },
];

export const disclaimer =
  'This site is for informational purposes and is not medical advice. I cannot provide individual medical consultations.';
