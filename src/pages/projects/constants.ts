import { PageType } from "../types";
import { Prime } from "./Prime";
import { ThisSite } from "./ThisSite";

export const Projects: PageType[] = [
  {
    comp: ThisSite,
    title: "This Site",
    route: "/this-site",
  },
  {
    comp: Prime,
    title: "Prime",
    route: "/prime",
  },
];
