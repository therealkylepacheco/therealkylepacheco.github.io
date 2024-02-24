import { Button, Typography } from "@material-ui/core";
import React from "react";

type Props = {
  href: string;
  text: string;
};

export const NavButton = ({ href, text }: Props) => {
  return (
    <Button href={href} style={{ textTransform: "none" }}>
      <Typography variant="h3">{text}</Typography>
    </Button>
  );
};
