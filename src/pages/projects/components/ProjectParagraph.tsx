import React from "react";
import { Typography } from "@material-ui/core";

type Props = {
  children: React.ReactNode;
};

export const ProjectParagraph = ({ children }: Props) => {
  return (
    <Typography variant="h4" style={{ paddingBottom: "36px" }}>
      {children}
    </Typography>
  );
};
