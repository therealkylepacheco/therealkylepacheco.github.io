import { IconButton, PropTypes } from "@material-ui/core";
import React from "react";
import useContactButton from "./useContactButton";

type Props = {
  children: React.ReactNode;
  color?: PropTypes.Color;
  url: string;
};

export const ContactButtonUpdated = ({
  children,
  color = "secondary",
  url,
}: Props) => {
  const handleClick = useContactButton(url);

  return (
    <IconButton color={color} onClick={handleClick}>
      {children}
    </IconButton>
  );
};
