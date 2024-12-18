import { PageType } from "../types";
import { Expander } from "./Expander";
import { MortgageCalculator } from "./MortgageCalculator";
import { Prime } from "./Prime";
import { ProjectSpaceShooter } from "./ProjectSpaceShooter";
import { ThisSite } from "./ThisSite";

export const Projects: PageType[] = [
  {
    comp: MortgageCalculator,
    title: "Mortgage Calculator",
    route: "/mortgage-calculator",
  },
  {
    comp: ProjectSpaceShooter,
    title: "Space Shooter",
    route: "/project-space-shooter",
  },
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
