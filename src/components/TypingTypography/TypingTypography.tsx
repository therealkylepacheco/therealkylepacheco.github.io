import { Fade, Typography } from "@material-ui/core";
import React from "react";
import { TypingConfig } from "./types";
import { useTypingTypography } from "./useTypingTypography";
import { Cursor } from "./TypingTypography.styles";
import { Variant } from "@material-ui/core/styles/createTypography";

interface Props extends TypingConfig {
  variant: Variant;
}

export const TypingTypography = ({
  handleDone,
  initialDelay,
  text,
  typeSpeed,
  variant,
}: Props) => {
  const { cursorVisible, typingText } = useTypingTypography({
    handleDone,
    initialDelay,
    text,
    typeSpeed,
  });

  return (
    <Typography style={{ textAlign: "center" }} variant={variant}>
      {typingText}
      <Fade in={cursorVisible}>
        <Cursor />
      </Fade>
    </Typography>
  );
};
