export interface ProgramData {
  slug: string;
  titleHindi: string;
  titleEnglish: string;
  category: string;
  heroContent: string;
  heroImage: string;
  ctaText: string;
  donateLabel: string;
  objectives: { icon: string; title: string; description: string }[];
  stats: { value: string; label: string; icon: string }[];
  donationTiers: { amount: string; impact: string; icon: string }[];
  successStories: { name: string; location: string; story: string; before: string; after: string }[];
  timeline: { month: string; activity: string; description: string; completed: boolean }[];
  faqs: { question: string; answer: string }[];
  relatedPrograms: string[];
  aboutContent: string;
  whyNeeded: string;
  galleryImages: string[];
}

export const programsData: Record<string, ProgramData> = {
  "social-assistance": {
    slug: "social-assistance",
    titleHindi: "सामाजिक सहायता कार्यक्रम",
    titleEnglish: "Social Assistance Program",
    category: "Social Welfare",
    heroContent: "Supporting underprivileged families through welfare schemes and social security awareness.",
    heroImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80",
    ctaText: "Donate for Social Welfare",
    donateLabel: "Social Welfare Fund",
    objectives: [],
    stats: [],
    donationTiers: [],
    successStories: [],
    timeline: [],
    faqs: [],
    relatedPrograms: ["education", "donate-grains"],
    aboutContent: "We help vulnerable households access government welfare schemes and entitlements.",
    whyNeeded: "Many eligible families miss benefits due to lack of awareness or documentation.",
    galleryImages: [],
  },

  education: {
    slug: "education",
    titleHindi: "शैक्षिक कार्यक्रम",
    titleEnglish: "Education Program",
    category: "Education",
    heroContent: "Free coaching, scholarships and learning support for underserved youth.",
    heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
    ctaText: "Sponsor a Student",
    donateLabel: "Education Fund",
    objectives: [],
    stats: [],
    donationTiers: [],
    successStories: [],
    timeline: [],
    faqs: [],
    relatedPrograms: ["girl-child-education", "women-empowerment"],
    aboutContent: "Providing access to coaching and study materials for competitive exams and school success.",
    whyNeeded: "Economic barriers prevent many talented students from accessing quality coaching.",
    galleryImages: [],
  },

  "donate-grains": {
    slug: "donate-grains",
    titleHindi: "दान एक मुट्ठी अनाज",
    titleEnglish: "Donate a Handful of Grain",
    category: "Food Security",
    heroContent: "Community-driven grain donations to feed families during lean seasons.",
    heroImage: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=1600&q=80",
    ctaText: "Donate Grains",
    donateLabel: "Food Security Fund",
    objectives: [],
    stats: [],
    donationTiers: [],
    successStories: [],
    timeline: [],
    faqs: [],
    relatedPrograms: ["social-assistance"],
    aboutContent: "Collecting and distributing grain to food-insecure households in our regions.",
    whyNeeded: "Seasonal hunger and crop shocks leave families without consistent food supplies.",
    galleryImages: [],
  },

  "women-empowerment": {
    slug: "women-empowerment",
    titleHindi: "महिला अधिकारिता",
    titleEnglish: "Women Empowerment",
    category: "Women & Gender",
    heroContent: "Skill development, SHG formation and awareness programs for women.",
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80",
    ctaText: "Support Women Empowerment",
    donateLabel: "Women Empowerment Fund",
    objectives: [],
    stats: [],
    donationTiers: [],
    successStories: [],
    timeline: [],
    faqs: [],
    relatedPrograms: ["education"],
    aboutContent: "Building livelihoods and financial literacy among rural women.",
    whyNeeded: "Low workforce participation and limited access to markets restrict women's incomes.",
    galleryImages: [],
  },

  "sanitary-pad-distribution": {
    slug: "sanitary-pad-distribution",
    titleHindi: "सेनेटरी पैड वितरण",
    titleEnglish: "Sanitary Pad Distribution",
    category: "Health & Hygiene",
    heroContent: "Menstrual hygiene awareness and free sanitary pad distribution in schools and villages.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
    ctaText: "Support Menstrual Health",
    donateLabel: "Hygiene Fund",
    objectives: [],
    stats: [],
    donationTiers: [],
    successStories: [],
    timeline: [],
    faqs: [],
    relatedPrograms: ["girl-child-education", "women-empowerment"],
    aboutContent: "Ensuring girls and women have access to safe menstrual products and education.",
    whyNeeded: "Menstrual stigma and lack of access cause health and attendance issues in schools.",
    galleryImages: [],
  },

  "girl-child-education": {
    slug: "girl-child-education",
    titleHindi: "बालिका शिक्षा",
    titleEnglish: "Girl Child Education",
    category: "Girls Education",
    heroContent: "Supporting girls to stay in school through scholarships and mentoring.",
    heroImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80",
    ctaText: "Educate a Girl Child",
    donateLabel: "Girl Education Fund",
    objectives: [],
    stats: [],
    donationTiers: [],
    successStories: [],
    timeline: [],
    faqs: [],
    relatedPrograms: ["education", "sanitary-pad-distribution"],
    aboutContent: "Keeping girls in school with materials, mentorship and community engagement.",
    whyNeeded: "Dropout risk from early marriage, safety concerns and economic pressures.",
    galleryImages: [],
  },
};

export const relatedProgramsMeta: Record<string, { title: string; titleHindi: string; description: string; image: string; category: string }> = {
  "social-assistance": {
    title: "Social Assistance Program",
    titleHindi: "सामाजिक सहायता कार्यक्रम",
    description: "Supporting underprivileged families through welfare schemes and social security awareness.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80",
    category: "Social Welfare",
  },
  education: {
    title: "Education Program",
    titleHindi: "शैक्षिक कार्यक्रम",
    description: "Free coaching, skill development, and scholarship support for competitive exam aspirants.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    category: "Education",
  },
  "donate-grains": {
    title: "Donate a Handful of Grain",
    titleHindi: "दान एक मुट्ठी अनाज",
    description: "Community-driven food donation initiative collecting grains for needy families.",
    image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=400&q=80",
    category: "Food Security",
  },
  "women-empowerment": {
    title: "Women Empowerment",
    titleHindi: "महिला अधिकारिता",
    description: "Empowering women through awareness, skill development, and livelihood support.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    category: "Women & Gender",
  },
  "sanitary-pad-distribution": {
    title: "Sanitary Pad Distribution",
    titleHindi: "सेनेटरी पैड वितरण",
    description: "Promoting menstrual hygiene awareness and free sanitary pad distribution.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    category: "Health & Hygiene",
  },
  "girl-child-education": {
    title: "Girl Child Education",
    titleHindi: "बालिका शिक्षा",
    description: "Ensuring every girl receives quality education, materials, and mentorship.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
    category: "Girls Education",
  },
};
