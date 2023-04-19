import React from "react";
import PageTitle from "../components/PageTitle";
import me from "../images/me.png";
import Grid from "@material-ui/core/Grid";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { KeyPoints } from "../components/KeyPoints/KeyPoints";
import { WhatsNew } from "../components/WhatsNew/WhatsNew";
import { ContentImage } from "../components/Content/Content.styles";
import { ThemedGrid } from "../components/ThemedGrid/ThemedGrid";

export const Home = () => {
  return (
    <ThemedGrid container direction="row" spacing={10}>
      <Grid container item spacing={2}>
        <Grid container item alignItems="center" justifyContent="center">
          <PageTitle text="Kyle Pacheco" />
          <ContentImage imgRounded alt="Kyle Pacheco" src={me} />
        </Grid>
        <Grid item xs={12}>
          <KeyPoints
            variant="h4"
            points={["Software", "Frontend", "Backend", "Web Dev"]}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        xs={12}
      >
        <InfoCard
          title="Experience"
          route="/experience"
          xs={12}
          sm={4}
          hoverEffect
        />
        <InfoCard
          title="Projects"
          route="/projects"
          xs={12}
          sm={4}
          hoverEffect
        />
        <InfoCard title="Skills" route="/skills" xs={12} sm={4} hoverEffect />
      </Grid>
      <WhatsNew />
    </ThemedGrid>
  );
};
