const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
children: [
  // ▶ Project 1
  {
    id: 5,
    name: "AI Mock Interview Platform",
    icon: "/images/folder.png",
    kind: "folder",
    position: "top-10 left-5",
    windowPosition: "top-[5vh] left-5",
    children: [
      {
        id: 1,
        name: "PrepWise Project.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-5 left-10",
        description: [
          "PrepWise is an AI-powered mock interview platform that lets users simulate real interview scenarios with voice-based AI agents.",
          "Instead of practicing alone, you get real-time voice interviews powered by Vapi AI, with questions dynamically tailored to your profile.",
          "Think of it like having a personal interview coach available 24/7—giving structured feedback, scoring your answers, and tracking your progress.",
          "Built with Next.js, Node.js, Firebase, and TailwindCSS, deployed on Vercel with production-ready optimizations.",
        ],
      },
      {
        id: 2,
        name: "prepwise.com",
        icon: "/images/safari.png",
        kind: "file",
        fileType: "url",
        href: "https://jsm-mock-interview-platform-sand.vercel.app/",
        position: "top-10 right-20",
      },
      {
        id: 4,
        name: "prepwise.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 right-80",
        imageUrl: "/images/project-1.png",
      },
      {
        id: 5,
        name: "Design.fig",
        icon: "/images/plain.png",
        kind: "file",
        fileType: "fig",
        href: "https://google.com",
        position: "top-60 right-20",
      },
    ],
  },

  // ▶ Project 2
  {
    id: 6,
    name: "E-Commerce App",
    icon: "/images/folder.png",
    kind: "folder",
    position: "top-52 right-80",
    windowPosition: "top-[20vh] left-7",
    children: [
      {
        id: 1,
        name: "MERN E-Commerce Project.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-5 right-10",
        description: [
          "A full-stack e-commerce platform built on the MERN stack featuring JWT authentication, cart, and order management.",
          "Instead of a basic store, it includes an admin analytics dashboard with real-time visibility into sales, inventory, and user activity.",
          "Think of it like a production-ready Shopify clone—with integrated iyzico payments, Cloudinary image hosting, and CI/CD on Render.",
          "Built with MongoDB, Express.js, React/Vite, and Node.js with a clean, responsive UI.",
        ],
      },
      {
        id: 2,
        name: "mern-ecommerce.com",
        icon: "/images/safari.png",
        kind: "file",
        fileType: "url",
        href: "https://mern-ecommerce-app-1-0i9s.onrender.com/",
        position: "top-20 left-20",
      },
      {
        id: 4,
        name: "mern-ecommerce.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 left-80",
        imageUrl: "/images/project-2.png",
      },
      {
        id: 5,
        name: "Design.fig",
        icon: "/images/plain.png",
        kind: "file",
        fileType: "fig",
        href: "https://google.com",
        position: "top-60 left-5",
      },
    ],
  },

  // ▶ Project 3
{
  id: 7,
  name: "Reach Platform",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-10 left-80",
  windowPosition: "top-[33vh] left-7",
  children: [
    {
      id: 1,
      name: "Reach Platform Project.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "Reach Platform is a production-deployed React app connecting volunteer teachers with NGOs around the world.",
        "Instead of scattered communication, it provides a centralised platform where teachers can find opportunities and NGOs can manage volunteers.",
        "Think of it like a LinkedIn for educators and nonprofits—built during a competitive 600+ hour full-stack bootcamp.",
        "Built with React, with a focus on responsive UI, component architecture, and API integration.",
      ],
    },
    {
      id: 2,
      name: "reach-platform.com",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://github.com/ReCoded-Org/teach-kids-capstone-project",
      position: "top-10 right-20",
    },
    {
      id: 4,
      name: "reach-platform.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-80",
      imageUrl: "/images/project-3.png",
    },
    {
      id: 5,
      name: "Design.fig",
      icon: "/images/plain.png",
      kind: "file",
      fileType: "fig",
      href: "https://google.com",
      position: "top-60 right-20",
    },
  ],
},
],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpeg",
    },
   {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Full Stack Developer & Problem Solver",
      description: [
        "Hey! I’m Aya 👋, a Full Stack Developer based in Istanbul who enjoys building modern, interactive web applications and turning ideas into real products.",
        
        "I work mostly with JavaScript, React, Next.js, Node.js, Express, and MongoDB. I also have experience with ASP.NET Core, Firebase, and building AI-powered applications.",
        
        "I enjoy creating clean user experiences, scalable backend systems, and projects that solve real problems instead of just looking good.",
        
        "Recently, I’ve been working on projects like AI mock interview platforms, e-commerce systems, portfolio experiences, and educational platforms tailored to different learning styles.",
        
        "Outside of coding, I’m usually learning something new, improving my English, going to the gym, or spending way too much time adjusting UI details until everything feels right 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };