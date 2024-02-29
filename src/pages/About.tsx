import React from "react";
import PageTitle from "../components/PageTitle";
import me from "../images/me.png";
import { ThemedGrid } from "../components/ThemedGrid/ThemedGrid";
import { Grid, Paper, Typography } from "@material-ui/core";
import { ThemedText } from "../components/ThemedText/ThemedText";
import { ContentImage } from "../components/Content/Content.styles";

export const About = () => {
  return (
    <Grid container>
      <Typography variant="h1">About</Typography>
      <Paper>
        <Typography variant="h4">
          Hi! My name is Kyle Pacheco, and I'm a software developer in Boise,
          ID. Software development is an incredibly interesting career so far.
          Building out new products and solving complex problems while
          collaborating with my teammates are the highlights of my day to day.
          Both frontend and backend development interest me and I have
          experience in both. Outside of work, you'll find me hiking, reading,
          or working on my house.
        </Typography>
      </Paper>
    </Grid>
  );

  return (
    <ThemedGrid container direction="row" spacing={6}>
      <Grid item>
        <PageTitle text="Kyle Pacheco" />
      </Grid>
      <Grid container item direction="row" alignItems="center" spacing={0}>
        <Grid item xs={12} sm={4}>
          <ContentImage imgRounded alt="Kyle Pacheco" src={me} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <ThemedText>
            Hi! My name is Kyle Pacheco, and I'm a software developer in Boise,
            ID. Software development is an incredibly interesting career so far.
            Building out new products and solving complex problems while
            collaborating with my teammates are the highlights of my day to day.
            Both frontend and backend development interest me and I have
            experience in both. Outside of work, you'll find me hiking, reading,
            or working on my house.
          </ThemedText>
        </Grid>
      </Grid>
    </ThemedGrid>
  );
};
