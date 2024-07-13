import { defineUserConfig } from "vuepress";
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "你的百科",
  // description: "你的百科",

  theme,

  // plugins: [
  //   docsearchPlugin({
  //     // 配置项
  //   }),
  // ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
