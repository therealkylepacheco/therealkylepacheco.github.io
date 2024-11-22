import React from "react";
import RepoMessage from "../../components/RepoMessage";
import Grid from "@material-ui/core/Grid";
import { ProjectParagraphContainer } from "./components/ProjectParagraphContainer";
import { ProjectParagraph } from "./components/ProjectParagraph";
import { DeployedLink } from "../../components/RepoMessage/RepoMessage";

export const MortgageCalculator = () => {
  const deployedLink =
    "https://therealkylepacheco.github.io/mortgage-calculator";
  const repoLink = "https://github.com/therealkylepacheco/mortgage-calculator";

  return (
    <Grid container spacing={5} direction="row">
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <RepoMessage link={repoLink} />
        </Grid>
        <Grid item xs={12}>
          <DeployedLink link={deployedLink} />
        </Grid>
      </Grid>
      <ProjectParagraphContainer>
        <ProjectParagraph>
          This is a mortgage calculator featuring several modes. Give it a look!
        </ProjectParagraph>
      </ProjectParagraphContainer>
    </Grid>
  );
};
