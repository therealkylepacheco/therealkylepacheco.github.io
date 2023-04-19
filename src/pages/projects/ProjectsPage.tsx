import React from "react";
import PageTitle from "../../components/PageTitle";
import Grid from "@material-ui/core/Grid";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { Projects } from "./constants";

export const ProjectsPage = () => {
  return (
    <>
      <PageTitle text="Projects" />
      <Grid container spacing={2}>
        {Projects.map((project) => (
          <InfoCard
            xs={12}
            sm={4}
            title={project.title}
            route={`/projects${project.route}`}
          />
        ))}
      </Grid>
    </>
  );
};
