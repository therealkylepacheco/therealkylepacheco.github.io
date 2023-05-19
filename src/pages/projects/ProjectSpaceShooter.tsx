import React from "react";
import PageTitle from "../../components/PageTitle";
import RepoMessage from "../../components/RepoMessage";
import { ThemedGrid } from "../../components/ThemedGrid/ThemedGrid";
import { ThemedText } from "../../components/ThemedText/ThemedText";
import Grid from "@material-ui/core/Grid";
import { ItchWidget } from "../../components/ItchWidget/ItchWidget";

export const ProjectSpaceShooter = () => {
  const title = "Project Space Shooter";
  const repoLink = "https://github.com/therealkylepacheco/space-shooter";

  return (
    <ThemedGrid container spacing={5} direction="row">
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <PageTitle text={title} />
        </Grid>
        <Grid item xs={12}>
          <RepoMessage link={repoLink} />
        </Grid>
        <Grid item xs={12}>
          <ItchWidget
            title="Project Space Shooter"
            src="https://itch.io/embed/2071648?bg_color=000000&amp;fg_color=ffffff&amp;border_color=000000"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ThemedText>
          Expander is my first solo developed game. Prior to this, all my
          exposure to game development has been through Udemy courses and other
          tutorials.
        </ThemedText>
      </Grid>
      <Grid item xs={12}>
        <ThemedText>
          I wanted to make a simple experience for my first game, so I set out
          to make something with one button controls that is easy to understand
          conceptually. The result was Expander. Expander is a simple game,
          where the point is to dodge the incoming walls for as long as possible
          using the spacebar to expand the ever contracting orbs.
        </ThemedText>
      </Grid>
      <Grid item xs={12}>
        <ThemedText>
          I made Expander in unity and entirely with object primitives. The most
          challenging part of this project was calculating where to spawn the
          walls so that there would always be a fixed distance between them.
          This involved making copies of the primitive, calculating what scale
          they should have, and determining where to place them on the x-axis.
        </ThemedText>
      </Grid>
      <Grid item xs={12}>
        <ThemedText>
          While Expander is a simple game, it does gradually get more difficult.
          Every three walls the player passes through, the gaps between walls
          gets smaller and smaller until there is barely enough clearance to
          pass. Check out the game on itch, and see how far you can get!
        </ThemedText>
      </Grid>
    </ThemedGrid>
  );
};
