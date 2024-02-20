import { Fade, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useIntroSubheading } from "./useIntroSubheading";

type Props = {
  startAnimation: boolean;
};

export const IntroSubheading = ({ startAnimation }: Props) => {
  const { inCount, subs } = useIntroSubheading(startAnimation);

  return (
    <Grid container item xs={12}>
      {subs.map((sub, index) => (
        <Grid key={sub} item xs={12} sm={4}>
          <Fade in={index < inCount}>
            <Typography variant="h2" style={{ textAlign: "center" }}>
              {sub}
            </Typography>
          </Fade>
        </Grid>
      ))}
    </Grid>
  );
};
