import React from "react";
import { Blurb, Image } from "./ThemedImage.styles";
import { Grid, Typography } from "@material-ui/core";

type Props = {
  src: string;
  caption?: string;
  imgRounded?: boolean;
};

export const ThemedImage = ({ src, caption, imgRounded }: Props) => {
  return (
    <Grid
      container
      item
      justifyContent="center"
      alignItems="center"
      style={{ paddingTop: "32px", paddingBottom: "32px" }}
    >
      <Image imgRounded={imgRounded} src={src} />
      {caption ? <Typography variant="h5">{caption}</Typography> : null}
    </Grid>
  );
};
