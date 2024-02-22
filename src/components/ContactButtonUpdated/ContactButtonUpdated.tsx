import { IconButton } from "@material-ui/core";
import React from "react";
import useContactButton from "./useContactButton";

type Props = {
  children: React.ReactNode;
  url: string;
};

export const ContactButtonUpdated = ({ children, url }: Props) => {
  const handleClick = useContactButton(url);

  return (
    <IconButton color="secondary" onClick={handleClick}>
      {children}
    </IconButton>
  );
};
