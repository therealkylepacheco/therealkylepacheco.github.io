import React, { useCallback, useState } from "react";
import ittLogo from "../images/inTimeTec.png";
import kountLogo from "../images/kount.png";
import liiingoLogo from "../images/liiingo.png";
import plextracLogo from "../images/plextrac.png";
import PageTitle from "../components/PageTitle";
import { InfoCard } from "../components/InfoCard/InfoCard";
import Grid, { GridSize } from "@material-ui/core/Grid";
import { PagePadding } from "../components/PagePadding/PagePadding";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ExpandIconButton } from "../components/InfoCard/InfoCard.styles";
import { ExpandableCard } from "../components/ExpandableCard/ExpandableCard";
import { ExperienceContent } from "../components/ExperienceContent/ExperienceContent";

export const Experience = () => {
  const link = "https://www.plextrac.com";

  const handleClickImage = useCallback(
    () => (link ? window.open(link, "_blank") : {}),
    [link]
  );

  const [expanded, setExpanded] = useState(false);
  const [gridSize, setGridSize] = useState<GridSize>(6);
  const handleExpand = useCallback(() => {
    if (!expanded) {
      // opening
      setExpanded(true);
      setGridSize(12);
    } else {
      // closing
      setExpanded(false);
      setGridSize(6);
    }
  }, [expanded]);

  /**
   *     style={{transition: theme.transitions.create("all", {
          easing: theme.transitions.easing.sharp, 
          duration: theme.transitions.duration.leavingScreen,
  })}}
   */

  return (
    <Grid style={PagePadding} container id="experience" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h1">Experience</Typography>
      </Grid>
      <ExpandableCard time="2022-Present" title="PlexTrac">
        <ExperienceContent
          image={plextracLogo}
          imageAlt="PlexTrac"
          link="https://www.plextrac.com"
          titles={[
            "Senior Software Engineer II (2024-Present)",
            "Senior Software Engineer (2023-2024)",
            "Software Engineer (2022-2023)",
          ]}
        >
          I currently work as a software engineer at PlexTrac. I am a member of
          the rapid feature development team. I work as a fullstack developer,
          focusing on the frontend UI, backend API, and how the two interact
          with one another.
        </ExperienceContent>
      </ExpandableCard>
      <ExpandableCard time="2021" title="Liiingo">
        <ExperienceContent
          image={liiingoLogo}
          imageAlt="Liiingo"
          link="https://www.liiingo.com"
          titles={["Software Developer"]}
        >
          While working at Liiingo as a software developer, the majority of my
          work is on the front end of a web app in ReactJS. I build custom
          components based on feature requests, implement UX designs, and
          interact with a Redux state store.
        </ExperienceContent>
      </ExpandableCard>
      <ExpandableCard time="2020-2021" title="In Time Tec">
        <ExperienceContent
          image={ittLogo}
          imageAlt="In Time Tec"
          link="https://www.intimetec.com"
          titles={["Software Engineer"]}
        >
          At In Time Tec, I worked contracted out to Kount where I was a
          software developer on the CPE team. I worked improving the current
          product through bug fixes, adding features, and improving the user
          experience.
        </ExperienceContent>
      </ExpandableCard>
      <ExpandableCard time="Summer 2019" title="Kount">
        <ExperienceContent
          image={kountLogo}
          imageAlt="Kount"
          link="https://www.kount.com"
          titles={["Software Development Engineer in Test Intern"]}
        >
          This was a summer internship with the Boise, ID based company Kount.
          My summer project was to design a command line interface for internal
          use. Upon completion, I worked on cross-project triggering and status
          attribution in GitLab.
        </ExperienceContent>
      </ExpandableCard>
    </Grid>
  );
};
