import { Home } from "./Home";
import { Experience } from "./Experience";
import { Contact } from "./Contact";
import logo from "../images/logo.png";
import { Education } from "./Education";
import { About } from "./About";
import { Skills } from "./Skills";
import { PageType } from "./types";
import { Projects } from "./projects/constants";
import { ProjectsPage } from "./projects/ProjectsPage";

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
    comp: Skills,
    title: "Skills",
    route: "/skills",
  },
  {
    comp: Education,
    title: "Education",
    route: "/education",
  },
  {
    title: "Projects",
    route: "/projects",
    comp: ProjectsPage,
    subRoutes: Projects,
  },
  {
    comp: Contact,
    title: "Contact",
    route: "/contact",
  },
];

export default Pages;
