import { FaReact, FaPython, FaJava, FaGitAlt, FaCubes } from "react-icons/fa";
import {
  SiTypescript,
  SiGo,
  SiRust,
  SiAmazon,
  SiKubernetes,
  SiNextdotjs,
  SiFastapi,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";
import { RiGitlabFill } from "react-icons/ri";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  category: "実務" | "学習中" | "経験あり";
  iconComponent: IconType;
  iconColor: string;
  description: string;
  years?: string;
  url: string;
}

export const skills: Skill[] = [
  {
    name: "TypeScript",
    category: "実務",
    iconComponent: SiTypescript,
    iconColor: "#3178C6",
    description: "型安全性を重視した開発",
    years: "3年+",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    category: "実務",
    iconComponent: FaReact,
    iconColor: "#61DAFB",
    description: "モダンなUIライブラリ",
    years: "3年+",
    url: "https://react.dev/",
  },
  {
    name: "Git",
    category: "実務",
    iconComponent: FaGitAlt,
    iconColor: "#F05032",
    description: "バージョン管理システム",
    years: "4年+",
    url: "https://git-scm.com/",
  },
  {
    name: "Python",
    category: "実務",
    iconComponent: FaPython,
    iconColor: "#3776AB",
    description: "データ分析・AI開発",
    years: "2年+",
    url: "https://www.python.org/",
  },
  {
    name: "Docker",
    category: "実務",
    iconComponent: SiDocker,
    iconColor: "#2496ED",
    description: "コンテナ化技術",
    years: "2年+",
    url: "https://www.docker.com/",
  },
  {
    name: "NextJS",
    category: "実務",
    iconComponent: SiNextdotjs,
    iconColor: "#000000",
    description: "フルスタックReactフレームワーク",
    years: "1年+",
    url: "https://nextjs.org/",
  },
  {
    name: "FastAPI",
    category: "実務",
    iconComponent: SiFastapi,
    iconColor: "#009688",
    description: "高速Python APIフレームワーク",
    years: "1年+",
    url: "https://fastapi.tiangolo.com/",
  },
  {
    name: "AWS",
    category: "実務",
    iconComponent: SiAmazon,
    iconColor: "#FF9900",
    description: "クラウドインフラ",
    years: "2年",
    url: "https://aws.amazon.com/",
  },
  {
    name: "Tailwind CSS",
    category: "実務",
    iconComponent: SiTailwindcss,
    iconColor: "#06B6D4",
    description: "ユーティリティファーストCSSフレームワーク",
    years: "1年+",
    url: "https://tailwindcss.com/",
  },
  {
    name: "GitLab",
    category: "実務",
    iconComponent: RiGitlabFill,
    iconColor: "#FC6D26",
    description: "CI/CDツール",
    years: "3年+",
    url: "https://about.gitlab.com/",
  },
  {
    name: "AWS CDK",
    category: "実務",
    iconComponent: SiAmazon,
    iconColor: "#FF9900",
    description: "Infrastructure as Code",
    years: "1年+",
    url: "https://aws.amazon.com/cdk/",
  },
  {
    name: "Rust",
    category: "学習中",
    iconComponent: SiRust,
    iconColor: "#CE422B",
    description: "メモリ安全性と高速性を両立",
    years: "6ヶ月",
    url: "https://www.rust-lang.org/",
  },
  {
    name: "Go",
    category: "学習中",
    iconComponent: SiGo,
    iconColor: "#00ADD8",
    description: "高性能バックエンド",
    years: "3ヶ月",
    url: "https://go.dev/",
  },
  {
    name: "Java",
    category: "経験あり",
    iconComponent: FaJava,
    iconColor: "#ED8B00",
    description: "エンタープライズ開発",
    years: "2ヶ月",
    url: "https://www.java.com/",
  },
  {
    name: "DDD",
    category: "学習中",
    iconComponent: FaCubes,
    iconColor: "#4A90E2",
    description: "ドメイン駆動設計",
    years: "1年+",
    url: "https://en.wikipedia.org/wiki/Domain-driven_design",
  },
  {
    name: "Kubernetes",
    category: "学習中",
    iconComponent: SiKubernetes,
    iconColor: "#326CE5",
    description: "コンテナオーケストレーション",
    years: "2ヶ月",
    url: "https://kubernetes.io/",
  },
];
