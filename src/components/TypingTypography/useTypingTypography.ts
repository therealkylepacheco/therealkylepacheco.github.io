import { useCallback, useEffect, useState } from "react";
import { useDelay, useTypeEffect } from "../../hooks";
import { TypingConfig } from "./types";

export const useTypingTypography = ({
  handleDone: configHandleDone,
  ...config
}: TypingConfig) => {
  const delay = useDelay();

  const [cursorVisible, setCursorVisible] = useState(true);

  const handleDone = useCallback(() => {
    if (configHandleDone) {
      configHandleDone();
    }
    setCursorVisible(false);
  }, [configHandleDone]);

  const typingText = useTypeEffect({ ...config, handleDone });

  const handleCursorBlink = useCallback(async () => {
    let tempVisible = true;
    for (let i = 0; i < 6; i++) {
      tempVisible = !tempVisible;
      setCursorVisible(tempVisible);
      await delay(500);
    }
  }, [delay]);

  useEffect(() => {
    void handleCursorBlink();
  }, [handleCursorBlink]);

  return {
    cursorVisible,
    typingText,
  };
};
