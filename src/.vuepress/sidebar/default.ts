import { sidebar } from "vuepress-theme-hope";

import { maintenance } from "./maintenance.js";
import { language } from "./language.js";

export default sidebar({
    "/docs/maintenance/": maintenance,
    "/docs/language/": language,
});