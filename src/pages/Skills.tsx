import Grid from "@material-ui/core/Grid";
import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { ExperienceBar } from "../components/ExperienceBar";
import { PagePadding } from "../components/PagePadding/PagePadding";
import { AppContext } from "../AppContext";

export const Skills = () => {
  const { isMobile } = useContext(AppContext);
  return (
    <Grid style={PagePadding} container id="skills" spacing={3}>
      <Grid item xs={12}>
        <Typography variant={isMobile ? "h2" : "h1"}>Skills</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Card>
          <CardContent style={{ textIndent: "48px" }}>
            <Typography variant={isMobile ? "h5" : "h4"}>
              The majority of my professional experience is in full stack
              development, and I am comfortable on the frontend and backend with
              various technologies.
            </Typography>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              style={{ visibility: "hidden" }}
            >
              return
            </Typography>
            <Typography variant={isMobile ? "h5" : "h4"}>
              I enjoy working on the frontend. Implementing designs through
              responsive, reusable components is a fun challenge, and I like
              having a visible impact on the user experience. Often times, I'm
              in charge of implementing the frontend portion of projects.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item xs={12} sm={12} md={8}>
        <ExperienceBar level="Senior" skill="React" value={85} />
        <ExperienceBar level="Senior" skill="Typescript" value={85} />
        <ExperienceBar level="Senior" skill="Node" value={85} />
        <ExperienceBar level="Senior" skill="Redux" value={85} />
        <ExperienceBar level="Senior" skill="AntD" value={85} />
        <ExperienceBar level="Senior" skill="MUI" value={85} />
        <ExperienceBar level="Moderate" skill="Postgres" value={65} />
        <ExperienceBar level="Moderate" skill="PHP" value={50} />
        <ExperienceBar level="Moderate" skill="Go" value={50} />
        <ExperienceBar level="Education" skill="C++" value={25} />
        <ExperienceBar level="Education" skill="C" value={25} />
        <ExperienceBar level="Education" skill="Java" value={15} />
      </Grid>
    </Grid>
  );
};
