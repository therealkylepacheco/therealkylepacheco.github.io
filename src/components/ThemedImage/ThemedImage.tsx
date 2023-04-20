import React from "react";
import { Blurb, Image } from "./ThemedImage.styles";
import { Grid } from "@material-ui/core";

type Props = {
  src: string;
  caption?: string;
  imgRounded?: boolean;
};

export const ThemedImage = ({ src, caption, imgRounded }: Props) => {
  return (
    <Grid container item justifyContent="center" alignItems="center">
      <Image imgRounded={imgRounded} src={src} />
      {caption ? <Blurb variant="caption">{caption}</Blurb> : null}
    </Grid>
  );
};
