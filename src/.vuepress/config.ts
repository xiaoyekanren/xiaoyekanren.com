import { defineUserConfig } from "vuepress";
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchProPlugin } from "vuepress-plugin-search-pro";


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
  plugins: [
    searchProPlugin({
      // 配置选项
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
