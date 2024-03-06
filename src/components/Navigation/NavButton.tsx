import { Button, Typography } from "@material-ui/core";
import React, { useCallback } from "react";

type Props = {
  action?: () => void;
  href: string;
  text: string;
};

export const NavButton = ({ action, href, text }: Props) => {
  const handleClick = useCallback(() => {
    if (action) {
      action();
    }
  }, [action]);

  return (
    <Button onClick={handleClick} href={href} style={{ textTransform: "none" }}>
      <Typography variant="h3">{text}</Typography>
    </Button>
  );
};
