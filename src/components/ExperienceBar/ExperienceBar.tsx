import { Fade, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useExperienceBar } from "./useExperienceBar";

type Props = {
  value: number;
  level: string;
  skill: string;
};

export const ExperienceBar = ({ level, skill, value }: Props) => {
  const { handleMouseEnter, handleMouseLeave, showLevel, skillSize } =
    useExperienceBar(value);

  return (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Grid
        item
        xs={4}
        sm={4}
        // lg={2}
        xl={2}
        style={{ textAlign: "end", paddingRight: "16px" }}
      >
        <Typography onClick={() => console.log("kdp test")} variant="h3">
          {skill}
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={4}
        sm={4}
        // lg={8}
        xl={8}
        style={{
          backgroundColor: "#973700",
          borderRadius: "50px",
          overflow: "hidden",
          height: "10px",
        }}
      >
        <Grid item xs={skillSize} style={{ backgroundColor: "#ffaf00" }} />
      </Grid>
      <Grid
        item
        xs={4}
        sm={4}
        //   lg={2}
        xl={2}
        style={{ paddingLeft: "16px" }}
      >
        <Fade in={showLevel}>
          <Typography variant="h3">{level}</Typography>
        </Fade>
      </Grid>
    </Grid>
  );
};
