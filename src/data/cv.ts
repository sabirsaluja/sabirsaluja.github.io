// Summary for the About page, transcribed from source-material/Sabir_Saluja_CV_2026.pdf.
// The full CV is the redacted PDF in public/cv/ (phone number and old email removed).

export interface CvEntry {
  org: string;
  role: string;
  location?: string;
  dates?: string;
  points?: string[];
}

export const training: CvEntry[] = [
  {
    org: 'Montefiore Medical Center',
    role: 'Residency, Diagnostic Radiology',
    location: 'Bronx, NY',
    dates: 'July 2026 – present',
  },
  {
    org: 'Sutter Health Alta Bates Summit Medical Center',
    role: 'Internship, Transitional Year',
    location: 'Oakland, CA',
    dates: 'July 2025 – June 2026',
  },
];

export const education: CvEntry[] = [
  {
    org: 'Renaissance School of Medicine at Stony Brook University',
    role: 'Doctor of Medicine (MD)',
    location: 'Stony Brook, NY',
    dates: '2020 – 2024',
  },
  {
    org: 'University of Southern California',
    role: 'Bachelor of Science (BS), Neuroscience',
    location: 'Los Angeles, CA',
    dates: '2014 – 2018',
  },
];

export const interests = {
  clinical: ['Radiology', 'Hospital medicine', 'Procedures'],
  research: ['Neuroimaging', 'Diffusion MRI tractography', 'Neuromodulation', 'Traumatic brain injury'],
};
