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
      text: "IoTDB",
      icon: "",
      link: "iotdb/",
      prefix: "iotdb/",
      children: "structure",
      // collapsible: true,  // 折叠
    },
    {
      text: "Docker",
      icon: "",
      link: "docker/docker.md",
      prefix: "docker/",
      children: "structure",
    },
    {
      text: "Git", 
      icon: "",
      link: "git/git.md",
      // prefix: "git/",
      // children: "structure",
    },
    {
      text: "Github",
      icon: "",
      link: "github/",
      prefix: "github/",
      children: "structure",
    },
    {
      text: "Linux",
      icon: "",
      link: "linux/",
      prefix: "linux/",
      children: "structure",
      collapsible: true,  // 折叠
    },
    {
      text: "Windows",
      icon: "",
      link: "windows/",
      prefix: "windows/",
      children: "structure",
    },
    {
      text: "Nginx",
      icon: "",
      link: "nginx/nginx.md",
      // prefix: "nginx/",
      // children: "structure",
    },
]);
