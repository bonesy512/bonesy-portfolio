export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  role?: string[];
  outcome?: string;
  categories: string[];
  imageUrl: string;
  imageAlt: string;
  gridClass: string;
  aspectClass: string;
}

export const projects: Project[] = [
  {
    id: "projob",
    title: "ProJob Website Design",
    description:
      "A full-featured job search and applicant tracking system (ATS) designed to streamline the hiring process for both job seekers and employers.",
    fullDescription:
      "ProJob is a comprehensive platform that integrates intuitive tools to help users manage job applications, resumes, and interview schedules, while providing robust tracking features for employers to efficiently manage candidates.",
    features: [
      "Job Search Engine: Powerful filters by location, job type, salary, and industry.",
      "Applicant Tracking: Real-time candidate pipelines and interview scheduling dashboard.",
      "Resume Builder & Manager: Custom resume creation and versioning.",
      "Automated Alerts: Notifications for new opportunities and status updates.",
      "Collaboration Tools: HR team feedback and collaborative hiring decisions.",
    ],
    role: [
      "UI/UX Design: Focused on simplicity and functionality for an intuitive experience.",
      "Full-Stack Development: Built core backend system, listings, and dashboards.",
      "API Integration: Integrated third-party job search and automation APIs.",
      "Quality Assurance: Rigorous testing and performance optimization.",
    ],
    outcome:
      "Successfully launched with positive feedback for its user-centric design and scalable feature set.",
    categories: ["Web Designer", "Product Designer", "Full-Stack"],
    imageUrl: "/projects/projob.png",
    imageAlt: "Premium dark mode ATS dashboard for ProJob",
    gridClass: "md:col-span-8",
    aspectClass: "aspect-[16/9]",
  },
  {
    id: "chicken-wing-festival",
    title: "Austin Chicken Wing Festival",
    description:
      "A vibrant, high-energy digital experience for Austin's premier food festival, focusing on ticket sales and event engagement.",
    fullDescription:
      "The digital flagship for the Austin Chicken Wing Festival, designed to capture the excitement of the event while providing a seamless ticket purchasing and scheduling experience for thousands of food enthusiasts.",
    features: [
      "Dynamic Event Calendar",
      "Tiered Ticket Selection",
      "Interactive Vendor Map",
      "Real-time Crowd Updates",
    ],
    role: [
      "Creative Direction",
      "Visual Identity",
      "Frontend Architecture",
      "Performance Optimization",
    ],
    outcome:
      "Driven record-breaking early bird ticket sales and established a bold new visual brand for the festival.",
    categories: ["Graphic Designer", "Web Designer", "Branding"],
    imageUrl: "/projects/austin-chicken-wing.png",
    imageAlt: "Vibrant and colorful landing page for Austin Chicken Wing Festival",
    gridClass: "md:col-span-4",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: "hivemind-crm",
    title: "Hivemind CRM Metaverse",
    description:
      "The blueprint for a spatial operating system, designed for the cognitive load of high-level creative directors in virtual environments.",
    fullDescription:
      "Hivemind bridges the gap between traditional CRM tools and immersive environments, offering a spatial interface for managing complex global client networks and project lifecycles within the metaverse.",
    features: [
      "3D Spatial Data Visualization",
      "Immersive Virtual Workspace",
      "Real-time VR/AR Syncing",
      "Predictive Relationship Analytics",
    ],
    role: [
      "Product Strategy",
      "Spatial UI/UX Design",
      "3D Environment Prototyping",
      "System Architecture",
    ],
    outcome:
      "Defined a new standard for spatial productivity tools, selected for several high-profile metaverse incubators.",
    categories: ["Metaverse", "UX", "Spatial UI"],
    imageUrl: "/projects/hivemind-crm.png",
    imageAlt: "Futuristic holographic CRM dashboard in a virtual environment",
    gridClass: "md:col-span-4",
    aspectClass: "aspect-[1/1]",
  },
  {
    id: "jdm-detailing",
    title: "JDM Detailing & Ceramic Coatings",
    description:
      "A premium digital showroom for high-end automotive detailing, emphasizing precision, quality, and the luxury of the mirror finish.",
    fullDescription:
      "A bespoke web experience for JDM Detailing that reflects their commitment to automotive excellence. The site focuses on high-impact visual conversion and educational content about advanced ceramic coating technology.",
    features: [
      "Bespoke Quote Generator",
      "Visual Service Portfolio",
      "Process Educational Hub",
      "Priority Booking System",
    ],
    role: [
      "Brand Positioning",
      "UI/UX Design",
      "Content Strategy",
      "Lead Generation Setup",
    ],
    outcome:
      "Transformed the brand's digital presence, resulting in a 40% increase in high-ticket ceramic coating inquiries.",
    categories: ["Web Designer", "Product Design", "Lead Gen"],
    imageUrl: "/projects/jdm-detailing.png",
    imageAlt: "Sleek metallic automotive brand website for JDM Detailing",
    gridClass: "md:col-span-8",
    aspectClass: "aspect-[16/7]",
  },
];
