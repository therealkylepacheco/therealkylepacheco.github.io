import Grid from "@material-ui/core/Grid";
import React from "react";
import agileLogo from "../images/agile.png";
import cLogo from "../images/c.png";
import cPlusPlusLogo from "../images/cPlusPlus.png";
import goLogo from "../images/go.png";
import ittLogo from "../images/inTimeTec.png";
import javaLogo from "../images/java.png";
import kountLogo from "../images/kount.png";
import liiingoLogo from "../images/liiingo.png";
import plextracLogo from "../images/plextrac.png";
import phpLogo from "../images/php.png";
import reactLogo from "../images/reactJs.png";
import reduxLogo from "../images/redux.png";
import typescriptLogo from "../images/typescript.png";
import Content from "../components/Content";
import PageTitle from "../components/PageTitle";
import ResponsiveContent from "../components/ResponsiveContent";
import SectionTitle from "../components/SectionTitle";
import SkillContent from "../components/SkillContent";

export const Experience = () => {
  return (
    <>
      <PageTitle text="Experience" />
      <ResponsiveContent sectionTitle="Experience">
        <Content
          link="https://www.plextrac.com"
          title="Software Engineer, PlexTrac (2022-Present)"
          img={plextracLogo}
          alt="PlexTrac"
        >
          I currently work as a software engineer at PlexTrac. I am a member of
          the rapid feature development team. I work as a fullstack developer,
          focusing on the frontend UI, backend API, and how the two interact
          with one another.
        </Content>
        <Content
          link="https://www.liiingo.com"
          title="Software Developer, Liiingo (2021)"
          img={liiingoLogo}
          alt="Liiingo"
        >
          While working at Liiingo as a software developer, the majority of my
          work is on the front end of a web app in ReactJS. I build custom
          components based on feature requests, implement UX designs, and
          interact with a Redux state store.
        </Content>
        <Content
          link="https://www.intimetec.com"
          title="Software Engineer, In Time Tec (2020-2021)"
          img={ittLogo}
          alt="In Time Tec"
        >
          At In Time Tec, I worked contracted out to Kount where I was a
          software developer on the CPE team. I worked improving the current
          product through bug fixes, adding features, and improving the user
          experience.
        </Content>
        <Content
          link="https://www.kount.com"
          title="Software Development Engineer in Test Intern, Kount (Summer 2019)"
          img={kountLogo}
          alt="Kount"
        >
          This was a summer internship with the Boise, ID based company Kount.
          My summer project was to design a command line interface for internal
          use. Upon completion, I worked on cross-project triggering and status
          attribution in GitLab.
        </Content>
      </ResponsiveContent>
      <SectionTitle title="Skills" />
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <SkillContent title="ReactJS" img={reactLogo} />
        <SkillContent title="Typescript" img={typescriptLogo} />
        <SkillContent title="PHP" img={phpLogo} />
        <SkillContent title="Go" img={goLogo} />
        <SkillContent title="Java" img={javaLogo} />
        <SkillContent title="Redux" img={reduxLogo} />
        <SkillContent title="Agile" img={agileLogo} />
        <SkillContent title="C++" img={cPlusPlusLogo} />
        <SkillContent title="C" img={cLogo} />
      </Grid>
    </>
  );
};
