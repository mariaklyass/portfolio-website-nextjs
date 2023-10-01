import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project1Img from "@/public/project1.jpg";
import project2Img from "@/public/project2.jpg";
import project3Img from "@/public/project3.jpg";

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
    title: "Project1",
    description:
      "I worked at this full-stack project which is ..... for .... months. Anyone can give public feedback via ...",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: project1Img,
    linkDeploy: "",
    linkCode: "",
  },
  {
    title: "Project2",
    description:
      "This is dsnsdk cjdhcs cjkahd nbdbbdd. J dsdjnsj js jjjsjns dddd. Ovfkn vdjkfhsj mmma shshs ddj nedbkjeb keh cec ekc ke e c ejcek dc dcdjc dkjc dc .",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: project2Img,
    linkDeploy: "",
    linkCode: "",
  },
  {
    title: "Project3",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer Motion"],
    imageUrl: project3Img,
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
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Bootstrap",
  "MongoDB-not-yet",
  "Redux-not-yet",
  "Express-not-yet",
  "PostgreSQL-not-yet",
  "Framer Motion",
] as const;
