import { arraySidebar } from "vuepress-theme-hope";

export const maintenance = arraySidebar([
  {
    text: "操作系统",
    icon: "desktop",
    children: [
      {
        text: "Linux",
        icon: "",
        link: "linux/",
        prefix: "linux/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "Windows",
        icon: "",
        link: "windows/",
        prefix: "windows/",
        children: "structure",
      },
    ],
  },
  {
    text: "数据库",
    icon: "database",
    children: [
      {
        text: "MySQL",
        icon: "",
        link: "db/mysql.md",
      },
      {
        text: "PostgreSQL",
        icon: "",
        link: "db/postgresql.md",
      },
      {
        text: "TimescaleDB",
        icon: "",
        link: "db/timescaledb.md",
      },
      {
        text: "IoTDB",
        icon: "",
        link: "db/iotdb.md",
      },
      {
        text: "IoTDB 同步",
        icon: "",
        link: "db/iotdb-sync.md",
      },
    ],
  },
  {
    text: "容器化",
    icon: "cube",
    children: [
      {
        text: "Docker",
        icon: "",
        link: "container/docker.md",
      },
      {
        text: "Containerd",
        icon: "",
        link: "container/containerd.md",
      },
      {
        text: "Kubernetes",
        icon: "",
        link: "container/Kubernetes.md",
      },
    ],
  },
  {
    text: "大数据",
    icon: "chart-bar",
    children: [
      {
        text: "Kafka",
        icon: "",
        link: "bigdata/kafka.md",
      },
    ],
  },
  {
    text: "版本控制与CI/CD",
    icon: "code-branch",
    children: [
      {
        text: "Git",
        icon: "",
        link: "git/git.md",
      },
      {
        text: "GitHub Action",
        icon: "",
        link: "git/github-action.md",
      },
      {
        text: "GitLab Runner",
        icon: "",
        link: "git/gitlab-runner.md",
      },
    ],
  },
  {
    text: "网络",
    icon: "network-wired",
    children: [
      {
        text: "Nginx",
        icon: "",
        link: "nginx/nginx.md",
      },
      {
        text: "路由交换",
        icon: "",
        link: "route&switch/",
        prefix: "route&switch/",
        children: "structure",
      },
    ],
  },
  {
    text: "虚拟化",
    icon: "server",
    link: "virtualization/",
    prefix: "virtualization/",
    children: "structure",
  },
]);
