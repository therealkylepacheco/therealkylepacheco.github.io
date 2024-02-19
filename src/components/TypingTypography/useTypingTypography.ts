import React, { useCallback, useEffect, useState } from "react";
import { useDelay, useTypeEffect } from "../../hooks";
import { TypingConfig } from "./types";

export const useTypingTypography = (config: TypingConfig) => {
  const delay = useDelay();

  const [cursorVisible, setCursorVisible] = useState(true);

  const handleDone = useCallback(() => setCursorVisible(false), []);

  const typingText = useTypeEffect({ ...config, handleDone });

  const handleCursorBlink = useCallback(async () => {
    let tempVisible = true;
    for (let i = 0; i < 10; i++) {
      tempVisible = !tempVisible;
      setCursorVisible(tempVisible);
      await delay(500);
    }
  }, []);

  useEffect(() => {
    void handleCursorBlink();
  }, [handleCursorBlink]);

  return {
    cursorVisible,
    typingText,
  };
};
