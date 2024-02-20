import { Fade, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useIntroSubheading } from "./useIntroSubheading";

type Props = {
  handleHide: () => void;
  startAnimation: boolean;
};

export const IntroSubheading = ({ handleHide, startAnimation }: Props) => {
  const { inCount, subs } = useIntroSubheading({ handleHide, startAnimation });

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
