import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { PagePadding } from "../components/PagePadding/PagePadding";
import { Typography } from "@material-ui/core";
import { ExpandableCard } from "../components/ExpandableCard/ExpandableCard";
import { ProjectSpaceShooter } from "./projects/ProjectSpaceShooter";
import { Expander } from "./projects/Expander";
import { ThisSite } from "./projects/ThisSite";
import { Prime } from "./projects/Prime";
import { AppContext } from "../AppContext";
import { MortgageCalculator } from "./projects/MortgageCalculator";

export const Projects = () => {
  const { isMobile } = useContext(AppContext);
  return (
    <Grid style={PagePadding} container id="projects" spacing={4}>
      <Grid item xs={12}>
        <Typography variant={isMobile ? "h2" : "h1"}>Projects</Typography>
      </Grid>
      <ExpandableCard title="Mortgage Calculator">
        <MortgageCalculator />
      </ExpandableCard>
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
