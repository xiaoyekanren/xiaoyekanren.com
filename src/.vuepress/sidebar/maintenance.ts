import { arraySidebar } from "vuepress-theme-hope";

export const maintenance = arraySidebar([
  {
    text: "系统",
    icon: "desktop",
    collapsible: true,
    children: [
      {
        text: "Linux",
        icon: "",
        link: "linux/",
        prefix: "linux/",
        children: "structure",
      },
      {
        text: "Windows",
        icon: "",
        link: "windows/",
        prefix: "windows/",
        children: "structure",
      },
      {
        text: "虚拟化",
        icon: "",
        link: "virtualization/",
        prefix: "virtualization/",
        children: "structure",
      },
    ],
  },
  {
    text: "数据服务",
    icon: "database",
    collapsible: true,
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
        text: "Kafka",
        icon: "",
        link: "bigdata/kafka.md",
      },
    ],
  },
  {
    text: "容器化",
    icon: "cube",
    collapsible: true,
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
    text: "版本控制",
    icon: "code-branch",
    collapsible: true,
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
    text: "常用软件",
    icon: "box-open",
    collapsible: true,
    children: [
      {
        text: "Nginx",
        icon: "",
        link: "nginx/nginx.md",
      },
      {
        text: "OpenVPN",
        icon: "",
        link: "openvpn.md",
      },
      {
        text: "ClamAV",
        icon: "",
        link: "clamav.md",
      },
    ],
  },
  {
    text: "路由交换",
    icon: "network-wired",
    collapsible: true,
    link: "route-switch/",
    prefix: "route-switch/",
    children: "structure",
  },
]);
