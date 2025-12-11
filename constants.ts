import { ExperienceItem, Project, SkillCategory, EducationItem } from './types';
import { Code, Smartphone, Database, Terminal, Cpu, PenTool } from 'lucide-react';

export const HERO_DATA = {
  name: "Bùi Lê Hoàng Tấn",
  title: "Full-stack Developer (Web & Mobile)",
  tagline: "Aspiring developer transforming complex problems into elegant digital solutions. Passionate about building seamless user interfaces and robust backend systems.",
  avatarUrl: "https://placehold.co/400x400/10b981/ffffff?text=Tan+Bui"
};

export const ABOUT_TEXT = "I am a final-year Software Engineering student at HCMC University of Technology (HUTECH) with an impressive GPA of 3.6/4.0. With a solid foundation in both Frontend and Backend development, I specialize in the JavaScript ecosystem (React, Next.js) and Cross-platform Mobile (Flutter). I am eager to leverage my skills in IoT and AI integration to build scalable applications that solve real-world problems.";

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "C#", "Dart"]
  },
  {
    title: "Frontend & Mobile",
    skills: ["ReactJS", "Next.js", "React Native", "Flutter", "Tailwind CSS"]
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", ".NET Core", "Firebase", "MySQL"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "Figma", "AWS Cloud Practitioner"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "MebiSoft",
    role: "Frontend Developer Intern",
    duration: "2 Months",
    description: "Developed the frontend dashboard for a Smart Farm Management System. Implemented real-time data visualization for IoT sensors and integrated AI analysis results to assist farmers in decision-making."
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "HCMC University of Technology (HUTECH)",
    degree: "Major in Software Engineering",
    grade: "GPA: 3.6/4.0"
  }
];

export const CERTIFICATIONS = [
  "AWS Certified Cloud Practitioner",
  "Google Data Analytics Certificate"
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "MemoAI",
    role: "Frontend Developer",
    stack: ["ReactJS", "Firebase", "AI Integration"],
    description: "An intelligent vocabulary learning platform personalized for users leveraging AI algorithms.",
    imageUrl: "https://picsum.photos/600/400?random=1"
  },
  {
    title: "Cinema Booking App",
    role: "Mobile Developer",
    stack: ["Flutter", "Firebase"],
    description: "A cross-platform mobile app for browsing movies, watching trailers, and booking tickets in real-time.",
    imageUrl: "https://picsum.photos/600/400?random=2"
  },
  {
    title: "E-Shop Backend API",
    role: "Backend Developer",
    stack: [".NET Core", "MySQL", "Docker"],
    description: "A robust RESTful API for an e-commerce platform handling authentication, product management, and order processing.",
    imageUrl: "https://picsum.photos/600/400?random=3"
  }
];

export const CONTACT_INFO = {
  email: "tanbui2672@gmail.com",
  phone: "(+84) 812 829 809",
  linkedin: "#",
  github: "#"
};

export const SKILL_ICONS = {
  Languages: Code,
  "Frontend & Mobile": Smartphone,
  "Backend & Database": Database,
  "Tools & Others": Terminal
};