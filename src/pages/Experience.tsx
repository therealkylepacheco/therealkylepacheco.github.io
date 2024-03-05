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

      <ExpandableCard
        image={plextracLogo}
        imageAlt="PlexTrac"
        link="https://www.plextrac.com"
        time="2022-Present"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h3">
            Senior Software Engineer II (2024-Present)
          </Typography>
          <Typography variant="h3">
            Senior Software Engineer (2023-2024)
          </Typography>
          <Typography variant="h3">Software Engineer (2022-2023)</Typography>
        </Box>
        <Typography
          variant="h4"
          style={{
            textIndent: "48px",
            paddingTop: "32px",
            transition: "all 0.5s ease-in-out",
          }}
        >
          I currently work as a software engineer at PlexTrac. I am a member of
          the rapid feature development team. I work as a fullstack developer,
          focusing on the frontend UI, backend API, and how the two interact
          with one another.
        </Typography>
      </ExpandableCard>

      <Grid
        item
        xs={12}
        sm={gridSize}
        style={{
          transition: "all .5s ease-in-out",
        }}
      >
        <Card>
          <CardContent>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <img
                alt="PlexTrac"
                onClick={handleClickImage}
                src={plextracLogo}
                style={{
                  borderRadius: "10px",
                  width: "75%",
                  maxWidth: "470px",
                  backgroundColor: "#ffaf00",
                  padding: "8px",
                }}
              />
              <Typography variant="h4">2022-Present</Typography>
              {/* <Typography variant="h4">
                Senior Software Engineer II (2024-Present),
              </Typography>
              <Typography variant="h4">
                Senior Software Engineer (2023-2024),
              </Typography>
              <Typography variant="h4">
                Software Engineer (2022-2023)
              </Typography> */}
              <CardActions disableSpacing>
                {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        > */}
                <ExpandIconButton onClick={handleExpand}>
                  <ExpandMoreIcon />
                </ExpandIconButton>
                {/* </ExpandMore> */}
              </CardActions>
              <Collapse in={expanded} unmountOnExit>
                BODY
              </Collapse>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        style={{
          transition: "all .5s ease-in-out",
        }}
      >
        <Card>
          <CardContent>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <img
                alt="PlexTrac"
                onClick={handleClickImage}
                src={plextracLogo}
                style={{
                  borderRadius: "10px",
                  width: "75%",
                  maxWidth: "470px",
                  backgroundColor: "#ffaf00",
                  padding: "8px",
                }}
              />
              <Typography variant="h4">2022-Present</Typography>
              {/* <Typography variant="h4">
                Senior Software Engineer II (2024-Present),
              </Typography>
              <Typography variant="h4">
                Senior Software Engineer (2023-2024),
              </Typography>
              <Typography variant="h4">
                Software Engineer (2022-2023)
              </Typography> */}
              <CardActions disableSpacing>
                {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        > */}
                <ExpandIconButton onClick={handleExpand}>
                  <ExpandMoreIcon />
                </ExpandIconButton>
                {/* </ExpandMore> */}
              </CardActions>
              <Collapse in={false} unmountOnExit>
                BODY
              </Collapse>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <>
      <PageTitle text="Experience" />
      <Grid container spacing={2}>
        <InfoCard
          xs={12}
          title="Software Engineer (2022-2023), Senior Software Engineer
(2023-Present)"
          img={plextracLogo}
          alt="PlexTrac"
          imgLink="https://www.plextrac.com"
          body="I currently work as a software engineer at PlexTrac. I am a member of the rapid feature development team. I work as a fullstack developer, focusing on the frontend UI, backend API, and how the two interact with one another."
          keyPoints={["React", "Node", "Typescript", "Fullstack"]}
        />
        <InfoCard
          xs={12}
          imgLink="https://www.liiingo.com"
          title="Software Developer (2021)"
          img={liiingoLogo}
          alt="Liiingo"
          body="While working at Liiingo as a software developer, the majority of my work is on the front end of a web app in ReactJS. I build custom components based on feature requests, implement UX designs, and interact with a Redux state store."
          keyPoints={["React", "Node", "Typescript", "Fullstack"]}
        />
        <InfoCard
          xs={12}
          imgLink="https://www.intimetec.com"
          title="Software Engineer (2020-2021)"
          img={ittLogo}
          alt="In Time Tec"
          body="At In Time Tec, I worked contracted out to Kount where I was a software developer on the CPE team. I worked improving the current product through bug fixes, adding features, and improving the user experience."
          keyPoints={["PHP", "Go"]}
        />
        <InfoCard
          xs={12}
          imgLink="https://www.kount.com"
          title="Software Development Engineer in Test Intern (Summer 2019)"
          img={kountLogo}
          alt="Kount"
          body="This was a summer internship with the Boise, ID based company Kount. My summer project was to design a command line interface for internal use. Upon completion, I worked on cross-project triggering and status attribution in GitLab."
          keyPoints={["Typescript", "CLI", "CI/CD Pipelines"]}
        />
      </Grid>
    </>
  );
};
