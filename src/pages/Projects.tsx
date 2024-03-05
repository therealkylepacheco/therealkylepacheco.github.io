import React from "react";
import Grid from "@material-ui/core/Grid";
import { PagePadding } from "../components/PagePadding/PagePadding";
import { Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ExpandIconButton } from "../components/InfoCard/InfoCard.styles";
import { ExpandableCard } from "../components/ExpandableCard/ExpandableCard";
import { ExperienceContent } from "../components/ExperienceContent/ExperienceContent";
import { ProjectSpaceShooter } from "./projects/ProjectSpaceShooter";
import { Expander } from "./projects/Expander";
import { ThisSite } from "./projects/ThisSite";
import { Prime } from "./projects/Prime";

export const Projects = () => {
  return (
    <Grid style={PagePadding} container id="projects" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h1">Projects</Typography>
      </Grid>
      <ExpandableCard title="Project Space Shooter">
        <ProjectSpaceShooter />
      </ExpandableCard>
      <ExpandableCard title="Expander">
        <Expander />
      </ExpandableCard>
      <ExpandableCard title="This Site (v2.0)">
        <ThisSite />
      </ExpandableCard>
      <ExpandableCard title="Prime Number Generator">
        <Prime />
      </ExpandableCard>
    </Grid>
  );
};
