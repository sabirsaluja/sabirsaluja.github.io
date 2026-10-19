// CV content for the About page, transcribed from source-material/Sabir_Saluja_CV_2026.pdf.
// Edit here, not in the page template.

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

export const research: CvEntry[] = [
  {
    org: 'Stanford Medicine, Department of Neurosurgery',
    role: 'Research · PI: Ashwin Ramayya, MD, PhD',
    location: 'Stanford, CA',
    dates: 'Sep 2024 – present',
    points: [
      'Investigating neurosurgical interventions for chronic pain.',
      'Completed a meta-analysis of placebo interventions for facial pain (in submission).',
      'Leading imaging analysis and grant writing for focused ultrasound to treat cancer pain.',
      'Assisting in a traumatic brain injury clinic and with data acquisition from behavioral tasks.',
    ],
  },
  {
    org: 'Stony Brook Medicine, Department of Neurosurgery',
    role: 'Research · PIs: Charles Mikell III, MD, and Sima Mofakham, PhD',
    location: 'Stony Brook, NY',
    dates: 'May 2021 – present',
    points: [
      'Investigating thalamo-prefrontal circuits involved in the recovery of command-following after severe traumatic brain injury.',
      'Designed the neuroimaging pipeline the lab uses to analyze all structural and diffusion MRI data, and helped implement a new high-resolution DWI sequence optimized for TBI patients.',
      'Mentored students in programming for data analysis and interpretation of neuroimaging data.',
    ],
  },
  {
    org: 'Penn Medicine, Department of Neurosurgery',
    role: 'Research · PI: Casey Halpern, MD',
    location: 'Philadelphia, PA',
    dates: 'Sep 2021 – Sep 2024',
    points: [
      'Tractography-based targeting for SEEG-guided deep brain stimulation for medically refractory OCD (NCT05623306).',
      'Designed the neuroimaging pipeline the lab uses to analyze all MRI data.',
      'Investigated outcomes of deep brain stimulation for Parkinson’s disease, focusing on non-motor effects of stimulation.',
    ],
  },
  {
    org: 'Stanford Medicine, Department of Neurosurgery',
    role: 'Research · PI: Casey Halpern, MD',
    location: 'Stanford, CA',
    dates: 'May 2018 – May 2020',
    points: [
      'Designed protocols for neuroimaging analysis in neuromodulation procedures, including deep brain stimulation and MRI-guided focused ultrasound (MRgFUS).',
      'Assisted with data collection in experimental neuromodulation trials for loss-of-control binge eating, OCD, and MRgFUS for essential tremor.',
    ],
  },
  {
    org: 'USC Institute for Neuroimaging and Informatics',
    role: 'Research · PI: Kristi Clark, PhD',
    location: 'Los Angeles, CA',
    dates: 'Aug 2015 – Aug 2017',
    points: [
      'Developed techniques for the analysis and integration of MRI with genomic data.',
    ],
  },
  {
    org: 'Transcriptic',
    role: 'Bioengineering Intern',
    location: 'Menlo Park, CA',
    dates: 'May 2015 – Aug 2015',
    points: [
      'Supported development and quality control of a robotic platform that automates biology experiments from the cloud, at an early-stage Y Combinator–backed startup.',
      'Refactored the command-line interface for experiment submission and optimized job scheduling on finite hardware using simplex optimization.',
    ],
  },
];

export const honors: CvEntry[] = [
  {
    org: 'University of Southern California',
    role: 'Provost Undergraduate Research Fellowship',
    location: 'Los Angeles, CA',
    dates: 'Summer 2016',
  },
  {
    org: 'University of Southern California',
    role: 'Neuroscience Honors Thesis (NEUR-490, Directed Research)',
    location: 'Los Angeles, CA',
  },
];

export const service: CvEntry[] = [
  {
    org: 'Stony Brook HOME (student-run free clinic)',
    role: 'Volunteer',
    location: 'Suffolk County, NY',
    dates: 'Aug 2020 – 2024',
    points: [
      'Performed clinical exams, assisted with phlebotomy, and wrote visit notes; taught underclassmen physical exam and communication skills.',
    ],
  },
  {
    org: 'Student National Medical Association',
    role: 'Mentor',
    dates: 'Aug 2020 – 2024',
    points: ['Met monthly with underserved undergraduate students to advise on the path to medical school.'],
  },
  {
    org: 'Lava Mae',
    role: 'Volunteer',
    location: 'San Francisco, CA',
    dates: 'Feb 2019 – Feb 2020',
    points: ['Helped run a free mobile shower service in the Mission District, including scheduling and health outreach.'],
  },
];

export const interests = {
  clinical: ['Radiology', 'Hospital medicine', 'Procedures'],
  research: ['Neuroimaging', 'Diffusion MRI tractography', 'Neuromodulation', 'Traumatic brain injury'],
};
