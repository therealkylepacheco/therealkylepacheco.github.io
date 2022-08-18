import Grid from "@material-ui/core/Grid";
import React from "react";
import { Content } from "../components/Content";
import { PageTitle } from "../components/PageTitle";
import { ResponsiveContent } from "../components/ResponsiveContent";
import { SectionTitle } from "../components/SectionTitle";
import { SkillContent } from "../components/SkillContent";
import agileLogo from "../images/agile.png";
import cLogo from "../images/c.png";
import cPlusPlusLogo from "../images/cPlusPlus.png";
import goLogo from "../images/go.png";
import ittLogo from "../images/inTimeTec.png";
import isuLogo from "../images/isu.png";
import javaLogo from "../images/java.png";
import kountLogo from "../images/kount.png";
import liiingoLogo from "../images/liiingo.png";
import nnuLogo from "../images/nnu.png";
import plextracLogo from "../images/plextrac.png";
import phpLogo from "../images/php.png";
import reactLogo from "../images/reactJs.png";
import reduxLogo from "../images/redux.png";
import typescriptLogo from "../images/typescript.png";

export const About = () => {
  return (
    <>
      <PageTitle text="About" />
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
      <ResponsiveContent sectionTitle="Education">
        <Content
          link="https://www.nnu.edu"
          title="Northwest Nazarene University, BS Computer Science"
          img={nnuLogo}
          alt="NNU"
          imgPosition="left"
        >
          I attended NNU and earned my BS in Computer Science over the course of
          2.5 years. During my time here, I served as the Computer Club
          Treasurer and IEEE Chapter secretary. I graduated in December 2019
          Magna Cum Laude.
        </Content>
        <Content
          link="https://www.isu.edu"
          title="Idaho State University, AA General Studies"
          img={isuLogo}
          alt="ISU"
          imgPosition="left"
        >
          I earned my associate's degree concurrently in high school. This
          allowed me to complete my gen ed requirements rapidly and graduate
          ahead of schedule.
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
