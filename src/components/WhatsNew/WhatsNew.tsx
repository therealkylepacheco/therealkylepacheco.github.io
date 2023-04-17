import React from "react";
import Grid from "@material-ui/core/Grid";
import { InfoCard } from "../InfoCard/InfoCard";
import { Projects } from "../../pages/projects/constants";
import { Title } from "./WhatsNew.styles";

export const WhatsNew = () => {
  const listSize = 3;

  return (
    <Grid container item>
      <Grid item xs={12}>
        <Title variant="h3">What's New?</Title>
      </Grid>
      <Grid container item spacing={2} justifyContent="flex-start">
        {Projects.map((project, index) =>
          index < listSize ? (
            <InfoCard
              hoverEffect
              key={project.route}
              title={project.title}
              route={project.route}
              xs={12}
              sm={4}
            />
          ) : null
        )}
      </Grid>
    </Grid>
  );
};
