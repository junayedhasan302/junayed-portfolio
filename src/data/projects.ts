import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    number: "01",
    slug: "bazar-dor-bangla",
    title: "Bazar Dor Bangla",
    description:
      "A Bangla-focused web application for exploring daily market prices, product rates, and essential market information.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/bazar-dor.png",
    liveUrl: "https://damkoto-sable.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/Assignment-07",
    challenges: [
      "Creating a responsive user interface with dynamic market data.",
      "Organizing product and price categorization clearly for users.",
      "Ensuring smooth cross-device performance and visual consistency.",
    ],
    improvements: [
      "Add expanded product catalog and historical market price graphs.",
      "Improve real-time search and filter capabilities.",
      "Enhance accessibility and progressive web app (PWA) support.",
    ],
  },
  {
    number: "02",
    slug: "fitlog",
    title: "FitLog",
    description:
      "A fitness-focused web application designed to help users track workouts, set fitness goals, and monitor physical progress.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/images/projects/fitlog.png",
    liveUrl: "https://jhfitlog.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/Assignment-06",
    challenges: [
      "Designing a clean, motivational interface with intuitive tracking logs.",
      "Managing interactive UI states for daily routines and activities.",
    ],
    improvements: [
      "Implement persistent user authentication and personalized progress history.",
      "Add workout analytics, streak tracking, and interactive charts.",
    ],
  },
  {
    number: "03",
    slug: "sobsomoy",
    title: "SobSomoy Updated",
    description:
      "A modern news portal web application for browsing breaking news, categorized headlines, and current updates.",
    technologies: ["Next.js", "JavaScript", "CSS"],
    image: "/images/projects/sobsomoy.png",
    liveUrl: "https://sobsomoy-updated.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/sobsomoy-updated",
    challenges: [
      "Presenting high-density news content with clear visual hierarchy.",
      "Building a responsive grid layout adaptable across mobile and tablet viewports.",
    ],
    improvements: [
      "Implement article search, bookmarking, and category filtering.",
      "Add optimized skeleton loading states and offline reading caching.",
    ],
  },
  {
    number: "04",
    slug: "jh-book-vibe",
    title: "JH Book Vibe",
    description:
      "An interactive book exploration web application designed for readers to discover, review, and organize book recommendations.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    image: "/images/projects/book-vibe.png",
    liveUrl: "https://book-vibe-weld-two.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/book-vibe",
    challenges: [
      "Organizing detailed book metadata and reading status attributes.",
      "Creating an accessible, pleasant reading catalog browsing experience.",
    ],
    improvements: [
      "Integrate book search with advanced author and genre filtering.",
      "Add reading lists, user reviews, and recommendation algorithms.",
    ],
  },
  {
    number: "05",
    slug: "photography-portfolio",
    title: "Photography Portfolio",
    description:
      "A minimalist, visual-first photography showcase presenting curated photographic stories, street captures, and creative compositions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/photography.png",
    liveUrl: "https://jhp-sand.vercel.app/",
    githubUrl: "https://github.com/junayedhasan302/photography-portfolio",
    challenges: [
      "Displaying high-resolution imagery without compromising page load speeds.",
      "Crafting a responsive gallery layout that adapts smoothly across screen sizes.",
    ],
    improvements: [
      "Add album categorization and full-screen lightbox photo viewing.",
      "Implement progressive image blurring and EXIF camera data display.",
    ],
  },
];

