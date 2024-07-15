import { arraySidebar } from "vuepress-theme-hope";

export const maintenance = arraySidebar([
  // 运维
    {
      text: "数据库",
      icon: "",
      link: "db/",
      prefix: "db/",
      children: "structure",
    },
    {
      text: "Docker",
      icon: "",
      link: "docker/",
      prefix: "docker/",
      children: "structure",
    },
    {
      text: "Git", 
      icon: "",
      link: "git/",
      prefix: "git/",
      children: "structure",
    },
    {
      text: "Github",
      icon: "",
      link: "github/",
      prefix: "github/",
      children: "structure",
    },
    {
      text: "IoTDB",
      icon: "",
      link: "iotdb/",
      prefix: "iotdb/",
      children: "structure",
    },
    {
      text: "Linux",
      icon: "",
      link: "linux/",
      prefix: "linux/",
      children: "structure",
    },
    {
      text: "Nginx",
      icon: "",
      link: "nginx/",
      prefix: "nginx/",
      children: "structure",
    },
]);
