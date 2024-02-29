import Grid from "@material-ui/core/Grid";
import React from "react";
import agileLogo from "../images/agile.png";
import cLogo from "../images/c.png";
import cPlusPlusLogo from "../images/cPlusPlus.png";
import goLogo from "../images/go.png";
import javaLogo from "../images/java.png";
import nodeLogo from "../images/node.png";
import dbLogo from "../images/db.png";
import antdLogo from "../images/antd.png";
import muiLogo from "../images/mui.png";

import phpLogo from "../images/php.png";
import reactLogo from "../images/reactJs.png";
import reduxLogo from "../images/redux.png";
import typescriptLogo from "../images/typescript.png";
import SkillContent from "../components/SkillContent";
import PageTitle from "../components/PageTitle";
import { Card, CardContent, Typography } from "@material-ui/core";
import { ExperienceBar } from "../components/ExperienceBar";
import { PagePadding } from "../components/PagePadding/PagePadding";

export const Skills = () => {
  return (
    <Grid style={PagePadding} container id="skills" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1">Skills</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent style={{ textIndent: "48px" }}>
            <Typography variant="h4">
              The majority of my professional experience is in full stack
              development, and I am comfortable on the frontend and backend with
              various technologies.
            </Typography>
            <Typography variant="h4" style={{ visibility: "hidden" }}>
              return
            </Typography>
            <Typography variant="h4">
              I enjoy working on the frontend. Implementing designs through
              responsive, reusable components is a fun challenge, and I like
              having a visible impact on the user experinece. Often times, I'm
              in charge of implementing the frontend portion of projects.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item xs={12} sm={8}>
        <ExperienceBar level="Senior" skill="React" value={85} />
        <ExperienceBar level="Senior" skill="Typescript" value={85} />
        <ExperienceBar level="Senior" skill="Node" value={85} />
        <ExperienceBar level="Senior" skill="Redux" value={85} />
        <ExperienceBar level="Senior" skill="AntD" value={85} />
        <ExperienceBar level="Senior" skill="MUI" value={85} />
        <ExperienceBar level="Moderate" skill="Postgres" value={65} />
        <ExperienceBar level="Moderate" skill="PHP" value={50} />
        <ExperienceBar level="Moderate" skill="Go" value={50} />
        <ExperienceBar level="Education" skill="C++" value={25} />
        <ExperienceBar level="Education" skill="C" value={25} />
        <ExperienceBar level="Education" skill="Java" value={15} />
      </Grid>
    </Grid>
  );

  return (
    <>
      <PageTitle text="Skills" />

      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <SkillContent title="React" experience="3 years" img={reactLogo} />
        <SkillContent
          title="Typescript"
          experience="3 years"
          img={typescriptLogo}
        />
        <SkillContent title="Node" experience="3 years" img={nodeLogo} />
        <SkillContent title="Redux" experience="3 years" img={reduxLogo} />
        <SkillContent title="Ant Design" experience="2 years" img={antdLogo} />
        <SkillContent title="Material UI" experience="1 year" img={muiLogo} />
        <SkillContent
          title="Query Writing"
          experience="SQL / NoSQL"
          img={dbLogo}
        />
        <SkillContent title="PHP" experience="1 year" img={phpLogo} />
        <SkillContent title="Go" experience="1 year" img={goLogo} />
        <SkillContent title="Agile" experience="4 years" img={agileLogo} />
        <SkillContent title="C++" experience="Education" img={cPlusPlusLogo} />
        <SkillContent title="C" experience="Education" img={cLogo} />
        <SkillContent title="Java" experience="Education" img={javaLogo} />
      </Grid>
    </>
  );
};
