import { arraySidebar } from "vuepress-theme-hope";

export const language = arraySidebar([
  // 语言
  // "",
    {
      text: "Java",
      icon: "",
      prefix: "java/",
      link: "java/",
      children: "structure",
    },
    {
      text: "Node.js",
      icon: "",
      prefix: "nodejs/",
      link: "nodejs/",
      children: "structure",
    },
    {
      text: "Python",
      icon: "",
      link: "python/",
      prefix: "python/",
      children: "structure",
    },
]);
