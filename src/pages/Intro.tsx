import Grid from "@material-ui/core/Grid";
import React from "react";
import myPhoto from "../images/myself.jpg";
import { Box, Typography } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import { ContactButtonUpdated } from "../components/ContactButtonUpdated";
import { GITHUB_URL, LINKEDIN_URL } from "../constants";

export const Intro = () => {
  return (
    <Grid id="about" container alignItems="center">
      <Grid item sm={12} md={6} xl={5}>
        <img
          alt="Kyle Pacheco"
          src={myPhoto}
          style={{ borderRadius: "10px", width: "100%" }}
        />
      </Grid>
      <Grid item sm={12} md={6} xl={7}>
        <Grid container direction="column" justifyContent="center">
          <Grid item>
            <Typography style={{ textAlign: "center" }} variant="h1">
              Kyle Pacheco
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="secondary"
              style={{ textAlign: "center" }}
              variant="h2"
            >
              Software Developer
            </Typography>
          </Grid>
          <Grid item>
            <Box display="flex" alignItems="center" justifyContent="center">
              <ContactButtonUpdated url={LINKEDIN_URL}>
                <LinkedIn style={{ fontSize: 75 }} />
              </ContactButtonUpdated>
              <ContactButtonUpdated url={GITHUB_URL}>
                <GitHub style={{ fontSize: 75 }} />
              </ContactButtonUpdated>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
