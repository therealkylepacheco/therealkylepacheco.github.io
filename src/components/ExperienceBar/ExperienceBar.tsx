import { Fade, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { useExperienceBar } from "./useExperienceBar";
import { AppContext } from "../../AppContext";

type Props = {
  value: number;
  level: string;
  skill: string;
};

export const ExperienceBar = ({ level, skill, value }: Props) => {
  const { handleMouseEnter, handleMouseLeave, showLevel, skillSize } =
    useExperienceBar(value);

  const { isMobile } = useContext(AppContext);

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
        <Typography variant={isMobile ? "h5" : "h3"}>{skill}</Typography>
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
          <Typography variant={isMobile ? "h5" : "h3"}>{level}</Typography>
        </Fade>
      </Grid>
    </Grid>
  );
};
