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
import { Typography } from "@material-ui/core";
import { ExperienceBar } from "../components/ExperienceBar";
import { PagePadding } from "../components/PagePadding/PagePadding";

export const Skills = () => {
  return (
    <Grid style={PagePadding} container id="skills">
      <Grid item xs={12}>
        <Typography variant="h1">Skills</Typography>
      </Grid>
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
