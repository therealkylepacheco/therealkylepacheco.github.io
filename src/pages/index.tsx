import React from "react";
import { Home } from "./Home";
import { Experience } from "./Experience";
import { Prime } from "./projects/Prime";
import { Chess } from "./projects/Chess";
import { Contact } from "./Contact";
import logo from "../images/logo.png";
import { Education } from "./Education";
import { About } from "./About";

export type PageType = {
  comp?: React.FunctionComponent;
  title: string;
  route: string;
  subRoutes?: PageType[];
  img?: string;
};

const Pages: PageType[] = [
  {
    comp: Home,
    title: "Home",
    route: "/",
    img: logo,
  },
  {
    comp: About,
    title: "About",
    route: "/about",
  },
  {
    comp: Experience,
    title: "Experience",
    route: "/experience",
  },
  {
    comp: Education,
    title: "Education",
    route: "/education",
  },
  {
    title: "Projects",
    route: "/projects",
    subRoutes: [
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
    ],
  },
  {
    comp: Contact,
    title: "Contact",
    route: "/contact",
  },
];

export default Pages;
