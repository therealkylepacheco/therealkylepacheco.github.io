import { PageType } from "../types";
import { Expander } from "./Expander";
import { Prime } from "./Prime";
import { ThisSite } from "./ThisSite";

export const Projects: PageType[] = [
  {
    comp: Expander,
    title: "Expander",
    route: "/expander",
  },
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
