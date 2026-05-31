// Design system constants
export const COLORS = {
  cosmicDark: "#0c1227",
  cosmicDarker: "#050810",
  deepPink: "#ff71ce",
  neonPink: "#ff00ff",
  cyanAccent: "#00f0ff",
  purpleAccent: "#8338ec",
};

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const SKILLS = {
  languages: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
  web: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express"],
  tools: ["Docker", "AWS", "Kubernetes", "Git", "PostgreSQL"],
};

export const PROJECTS = [
  {
    id: 1,
    title: "NeuralSynth Engine",
    description: "Advanced neural network implementation for audio synthesis",
    tags: ["Python", "TensorFlow", "PyTorch"],
    github: "https://github.com",
  },
  {
    id: 2,
    title: "CypherVault",
    description: "Secure encryption and key management system",
    tags: ["Cryptography", "C++", "Security"],
    github: "https://github.com",
  },
  {
    id: 3,
    title: "GopherDB",
    description: "Distributed database engine with ACID compliance",
    tags: ["Go", "Database", "Distributed Systems"],
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Iris Mesh Visualizer",
    description: "3D mesh visualization and analysis platform",
    tags: ["WebGL", "React Three Fiber", "TypeScript"],
    github: "https://github.com",
  },
];
