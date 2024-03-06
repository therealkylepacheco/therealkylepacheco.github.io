import React from "react";
import RepoMessage from "../../components/RepoMessage";
import Grid from "@material-ui/core/Grid";
import { ItchWidget } from "../../components/ItchWidget/ItchWidget";
import { ProjectParagraphContainer } from "./components/ProjectParagraphContainer";
import { ProjectParagraph } from "./components/ProjectParagraph";

export const ProjectSpaceShooter = () => {
  const repoLink = "https://github.com/therealkylepacheco/space-shooter";

  return (
    <Grid container spacing={5} direction="row">
      <Grid item container xs={12}>
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
      <ProjectParagraphContainer>
        <ProjectParagraph>
          Project Space Shooter (PSS) is my second game. I made this game
          entirely in Unity and with object primitives.
        </ProjectParagraph>
        <ProjectParagraph>
          PSS is an endless, arcade space shooter. Progressively harder waves of
          enemies spawn the longer the player survives. For the first four
          waves, new enemy types are introduced. These include a basic meteor
          (spawns at a random position and moves across the screen), chaser
          (follows the player), shooter (will continuously fire on the player),
          and harasser (wait underneath player, fire, repeat). Each enemy is
          introduced over the course of four waves. Once every enemy type has
          been introduced, they begin to spawn faster and faster with each
          subsequent wave.
        </ProjectParagraph>
        <ProjectParagraph>
          Compared to my previous game Expander, PSS is much more complex. There
          is more assets, gameplay, and logic to take into account. Each enemy
          has its own behavior to take into account, there is a health system
          for the player, the game is pausable, and there is a scoring system in
          place.
        </ProjectParagraph>
        <ProjectParagraph>
          I learned a lot while making PSS, and I am looking forward to applying
          this to a future project.
        </ProjectParagraph>
      </ProjectParagraphContainer>
    </Grid>
  );
};
