import React from "react";
import Grid from "@material-ui/core/Grid";

type Props = { children: React.ReactNode };

export const ProjectParagraphContainer = ({ children }: Props) => {
  return (
    <Grid item xs={12} style={{ textIndent: "48px" }}>
      {children}
    </Grid>
  );
};
