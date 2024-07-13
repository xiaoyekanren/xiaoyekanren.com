import { arraySidebar } from "vuepress-theme-hope";

export const maintenance = arraySidebar([
  // 运维
    {
      text: "数据库",
      icon: "book",
      prefix: "db/",
      children: "structure",
    },
    {
      text: "Docker",
      icon: "book",
      link: "docker/docker.md",
    },
    {
      text: "Git", 
      icon: "book",
      link: "git/git.md"
    },
    {
      text: "Github",
      icon: "book",
      prefix: "github/",
      children: "structure",
    },
    {
      text: "IoTDB",
      icon: "book",
      prefix: "iotdb/",
      children: "structure",
    },
    {
      text: "Linux",
      icon: "book",
      prefix: "linux/",
      children: "structure",
    },
    {
      text: "Nginx",
      icon: "book",
      link: "nginx/nginx.md",
    },
]);
