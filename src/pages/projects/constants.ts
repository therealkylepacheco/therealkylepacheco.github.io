import { PageType } from "../types";
import { Chess } from "./Chess";
import { Prime } from "./Prime";

export const Projects: PageType[] = [
  {
    comp: Prime,
    title: "Prime",
    route: "/prime",
  },
  {
    comp: Chess,
    title: "Chess",
    route: "/chess",
  },
];
