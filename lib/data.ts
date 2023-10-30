import project1Img from "@/public/project1.png";
import project2Img from "@/public/project2.png";
import project3Img from "@/public/project3.jpg";
import project1Code from "@/public/project1CodeImg.png";
import project2Code from "@/public/project2CodeImg.png";
import project3Code from "@/public/project3CodeImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Project 'Fake Posts'",
    description:
      "This web app displays posts, using data from an API. The functionality includes sorting, searching, filtering, deleting the posts or creating a new one. The project is based on fundamental React concepts such as JSX, state, props, functional components, hooks, component lifecycle, routing, etc.",
    tags: [
      "React",
      "React Router v.6",
      "Axios",
      "Vite",
      "useState",
      "useEffect",
      "useRef",
      "useMemo",
      "useNavigate",
      "useParams",
      "custom hooks",
      "conditional rendering",
      "event handlers",
      "CSS modules",
      "decomposition",
    ],
    imageUrl: project1Img,
    codeSnippet: project1Code,
    linkDeploy: "https://mariaklyass.github.io/fake-posts/",
    linkCode: "https://github.com/mariaklyass/fake-posts",
  },
  {
    title: "Project 'BerryShop'",
    description:
      "This is a small online-store with a shopping cart. You can add, increment, decrement and delete items in the cart. The project has an advanced file structure and has been implemented with TypeScript. The main feature - is the separate context for the cart, so that it's accessable from any page.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "json",
      "Bootstrap",
      "Bootstrap Components",
      "React Router v.6",
      "BrowserRouter",
      "useLocalStorage",
      "useContext",
      "Context.Provider",
      "best practices",
      "decomposition",
    ],
    imageUrl: project2Img,
    codeSnippet: project2Code,
    linkDeploy: "https://mariaklyass.github.io/berries/",
    linkCode: "https://github.com/mariaklyass/berries",
  },
  {
    title: "Project 'Employees'",
    description:
      "/In progress/ A web app that renders a list of all company's employees (data is received from an API), by switching between tabs you see employees of different departments. Functionality: the search bar, the modal window with sorting by alphabet/birthday, filter by department, separate employee's profile page",
    tags: ["React", "Vite", "React Router", "Axios", "CSS modules"],
    imageUrl: project3Img,
    codeSnippet: project3Code,
    linkDeploy: "",
    linkCode: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Router",
  "Next.js",
  "Vite",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "Vercel",
] as const;
