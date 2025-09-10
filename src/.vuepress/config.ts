import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "zzm的百科小全书",
  description: "记录及分享...",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
