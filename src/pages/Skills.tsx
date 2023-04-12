import Grid from "@material-ui/core/Grid";
import React from "react";
import agileLogo from "../images/agile.png";
import cLogo from "../images/c.png";
import cPlusPlusLogo from "../images/cPlusPlus.png";
import goLogo from "../images/go.png";
import javaLogo from "../images/java.png";

import phpLogo from "../images/php.png";
import reactLogo from "../images/reactJs.png";
import reduxLogo from "../images/redux.png";
import typescriptLogo from "../images/typescript.png";
import SkillContent from "../components/SkillContent";
import PageTitle from "../components/PageTitle";

export const Skills = () => {
  return (
    <>
      <PageTitle text="Skills" />

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
