import React, { useCallback } from "react";
import ittLogo from "../images/inTimeTec.png";
import kountLogo from "../images/kount.png";
import liiingoLogo from "../images/liiingo.png";
import plextracLogo from "../images/plextrac.png";
import PageTitle from "../components/PageTitle";
import { InfoCard } from "../components/InfoCard/InfoCard";
import Grid from "@material-ui/core/Grid";
import { PagePadding } from "../components/PagePadding/PagePadding";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Experience = () => {
  const link = "https://www.plextrac.com";

  const handleClickImage = useCallback(
    () => (link ? window.open(link, "_blank") : {}),
    [link]
  );

  return (
    <Grid style={PagePadding} container id="experience" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h1">Experience</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
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
              <Typography variant="h4">
                Senior Software Engineer (2023-Present),
              </Typography>
              <Typography variant="h4">
                Software Engineer (2022-2023)
              </Typography>
              <CardActions disableSpacing>
                {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        > */}
                <ExpandMoreIcon />
                {/* </ExpandMore> */}
              </CardActions>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
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
                  width: "100%",
                  backgroundColor: "#ffaf00",
                  padding: "8px",
                }}
              />
              <Typography variant="h4">
                Senior Software Engineer (2023-Present),
              </Typography>
              <Typography variant="h4">
                Software Engineer (2022-2023)
              </Typography>
              <CardActions disableSpacing>
                {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        > */}
                <ExpandMoreIcon />
                {/* </ExpandMore> */}
              </CardActions>
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
