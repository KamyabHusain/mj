import type {
  NavItem,
  Programme,
  School,
  ResearchDepartment,
  MediaEvent,
} from "./types";

export const SITE_NAME = "Maktabah Jafariyah";
export const SITE_TAGLINE = "Knowledge & Research Academy";
export const SITE_URL = "https://maktabahjafariyah.org";

export const PROGRAMMES: Programme[] = [
  {
    title: "Schooling",
    slug: "schooling",
    description:
      "Holistic K-12 education fostering lifelong learning and personal growth",
    href: "/academics/programmes/schooling",
    image:
      "https://maktabahjafariyah.org/wp-content/uploads/2025/01/Home_Academics_Schooling_316-x-292.jpg",
  },
  {
    title: "Graduation",
    slug: "graduation",
    description:
      "Undergraduate programmes cultivating critical thinking, driving positive change",
    href: "/academics/programmes/graduation",
    image:
      "https://maktabahjafariyah.org/wp-content/uploads/2025/01/Home_Academics_Graduation_316-x-292_.jpg",
  },
  {
    title: "Post-Graduation",
    slug: "post-graduation",
    description:
      "Expertise-building programmes, creating impactful industry leaders",
    href: "/academics/programmes/post-graduation",
    image:
      "https://maktabahjafariyah.org/wp-content/uploads/2025/02/Home_Academics_Post-Graduation_316-x-292-copy.jpg",
  },
  {
    title: "Ongoing Learning",
    slug: "ongoing-learning",
    description:
      "Flexible learning options to make education accessible for everyone",
    href: "/academics/programmes/ongoing-learning",
    image:
      "https://maktabahjafariyah.org/wp-content/uploads/2025/02/Home_Academics_Ongoing-Learning_316-x-292.jpg",
  },
];

export const SCHOOLS: School[] = [
  {
    title: "School of Arts",
    slug: "school-of-arts",
    href: "/academics/schools-centres/school-of-arts",
  },
  {
    title: "School of Commerce",
    slug: "school-of-commerce",
    href: "/academics/schools-centres/school-of-commerce",
  },
  {
    title: "School of Science",
    slug: "school-of-science",
    href: "/academics/schools-centres/school-of-science",
  },
  {
    title: "School of Computer Science",
    slug: "school-of-computer-science",
    href: "/academics/schools-centres/school-of-computer-science",
  },
  {
    title: "School of Engineering & Technology",
    slug: "school-of-engineering-technology",
    href: "/academics/schools-centres/school-of-engineering-technology",
  },
  {
    title: "School of Management",
    slug: "school-of-management",
    href: "/academics/schools-centres/school-of-management",
  },
  {
    title: "Industrial Technical Institute",
    slug: "industrial-technical-institute",
    href: "/academics/schools-centres/industrial-technical-institute",
  },
  {
    title: "Tibb Research Department",
    slug: "tibb-research-department",
    href: "/research/tibb-research-department",
  },
  {
    title: "Department of Agriculture & Animal Husbandry",
    slug: "department-of-agriculture-animal-husbandry",
    href: "/research/department-of-agriculture-animal-husbandry",
  },
];

export const RESEARCH_DEPARTMENTS: ResearchDepartment[] = [
  {
    title: "International Journal",
    slug: "international-journals-of-maktabah-jafariyah",
    description:
      "Showcasing efforts to foster a culture of research and intellectual exploration through scholarly discourse.",
    href: "/research/international-journals-of-maktabah-jafariyah",
    image:
      "https://maktabahjafariyah.org/wp-content/uploads/2024/10/neww-r-1.png",
  },
  {
    title: "Tibb Research Department",
    slug: "tibb-research-department",
    description:
      "Understanding the wisdom embedded in ancient medicinal systems and reframing it within the modern context.",
    href: "/research/tibb-research-department",
    image:
      "https://maktabahjafariyah.org/wp-content/uploads/2024/10/neww-r-2.png",
  },
  {
    title: "Department of Agriculture & Animal Husbandry",
    slug: "department-of-agriculture-animal-husbandry",
    description:
      "Improving the outlook towards agriculture and animal husbandry, and propagating its importance.",
    href: "/research/department-of-agriculture-animal-husbandry",
    image:
      "https://maktabahjafariyah.org/wp-content/uploads/2024/10/neww-r-3r.png",
  },
];

export const MEDIA_EVENTS: MediaEvent[] = [
  {
    title:
      "Ideation 2026: A Platform for creative minds to solve real-world problems",
    slug: "ideation-2026",
    category: "Events",
    department: "MBA Programme, School of Management",
    date: "25 Mar, 2026",
    href: "/ideation-2026",
  },
  {
    title: "BizThon 2025",
    slug: "bizthon-2025",
    category: "Events",
    department: "MBA Programme, School of Management",
    date: "22 Sep, 2025",
    href: "/bizthon-2025",
  },
  {
    title: "Food Founders Symposium 2025",
    slug: "food-founders-symposium",
    category: "Events",
    department: "Department of Business Incubation, School of Management",
    date: "30 Aug, 2025",
    href: "/food-founders-symposium",
  },
  {
    title: "Tech Founders Symposium 2025",
    slug: "tech-founders-symposium",
    category: "Events",
    department: "Department of Business Incubation, School of Management",
    date: "03 May, 2025",
    href: "/tech-founders-symposium",
  },
  {
    title: "Ideation 2025: A celebration of innovation and collaboration",
    slug: "ideation-2025",
    category: "Events",
    department: "MBA Programme, School of Management",
    date: "26 Feb, 2025",
    href: "/ideation-2025-a-celebration-of-innovation-and-collaboration",
  },
  {
    title: "Elocution Competition: Nurturing Student Expression",
    slug: "elocution-competition",
    category: "Events",
    department: "Arts and Commerce College",
    date: "04 Feb, 2025",
    href: "/elocution-competition-nurturing-student-expression",
  },
  {
    title:
      "Fostering Environmental Consciousness Through Creative Expression",
    slug: "fostering-environmental-consciousness",
    category: "Events",
    department: "Arts and Commerce College",
    date: "04 Feb, 2025",
    href: "/fostering-environmental-consciousness-through-creative-expression",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "About us", href: "/about-us" },
  {
    label: "Academics",
    href: "/academics",
    children: [
      {
        title: "Programmes",
        href: "/academics/programmes",
        items: PROGRAMMES.map((p) => ({ label: p.title, href: p.href })),
      },
      {
        title: "Schools & Centres",
        href: "/academics/schools-centres",
        items: SCHOOLS.map((s) => ({ label: s.title, href: s.href })),
      },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "Student Corner", href: "/student-corner" },
  { label: "People", href: "/people" },
  { label: "Amenities", href: "/amenities" },
  { label: "Institutions", href: "/institutions" },
  { label: "Our Responsibility", href: "/our-responsibility" },
  { label: "Media", href: "/media" },
];
