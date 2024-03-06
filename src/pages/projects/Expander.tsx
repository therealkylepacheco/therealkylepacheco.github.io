import React from "react";
import RepoMessage from "../../components/RepoMessage";
import Grid from "@material-ui/core/Grid";
import { ItchWidget } from "../../components/ItchWidget/ItchWidget";
import { ProjectParagraphContainer } from "./components/ProjectParagraphContainer";
import { ProjectParagraph } from "./components/ProjectParagraph";

export const Expander = () => {
  const repoLink = "https://github.com/therealkylepacheco/Expander";

  return (
    <Grid container spacing={5} direction="row">
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <RepoMessage link={repoLink} />
        </Grid>
        <Grid item xs={12}>
          <ItchWidget
            title="Expander"
            src="https://itch.io/embed/2049410?bg_color=000000&amp;fg_color=ffffff&amp;border_color=000000"
          />
        </Grid>
      </Grid>
      <ProjectParagraphContainer>
        <ProjectParagraph>
          Expander is my first solo developed game. Prior to this, all my
          exposure to game development has been through Udemy courses and other
          tutorials.
        </ProjectParagraph>
        <ProjectParagraph>
          I wanted to make a simple experience for my first game, so I set out
          to make something with one button controls that is easy to understand
          conceptually. The result was Expander. Expander is a simple game,
          where the point is to dodge the incoming walls for as long as possible
          using the spacebar to expand the ever contracting orbs.
        </ProjectParagraph>
        <ProjectParagraph>
          I made Expander in unity and entirely with object primitives. The most
          challenging part of this project was calculating where to spawn the
          walls so that there would always be a fixed distance between them.
          This involved making copies of the primitive, calculating what scale
          they should have, and determining where to place them on the x-axis.
        </ProjectParagraph>
        <ProjectParagraph>
          While Expander is a simple game, it does gradually get more difficult.
          Every three walls the player passes through, the gaps between walls
          gets smaller and smaller until there is barely enough clearance to
          pass. Check out the game on itch, and see how far you can get!
        </ProjectParagraph>
      </ProjectParagraphContainer>
    </Grid>
  );
};
