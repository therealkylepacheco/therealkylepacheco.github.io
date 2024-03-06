import { useCallback, useEffect, useState } from "react";
import { useDelay } from "./useDelay";

type Args = {
  handleDone?: () => void;
  initialDelay?: number;
  text: string;
  typeSpeed?: number;
};

export const useTypeEffect = ({
  handleDone = () => {},
  initialDelay = 0,
  text,
  typeSpeed = 250,
}: Args) => {
  const [letters, setLetters] = useState<string>("");
  const delay = useDelay();

  /**
   * Looping through flag while calling delay and handling state
   */
  const handleTypeAnimation = useCallback(async () => {
    await delay(initialDelay);

    let tempLetters = "";

    for (const letter of text.split("")) {
      tempLetters += letter;
      setLetters(tempLetters);
      await delay(typeSpeed);
    }

    handleDone();
  }, [delay, handleDone, initialDelay, text, typeSpeed]);

  useEffect(() => {
    void handleTypeAnimation();
  }, [handleTypeAnimation]);

  return letters;
};
