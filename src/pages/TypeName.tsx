import React, { useCallback, useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import me from "../images/me.png";
import Grid from "@material-ui/core/Grid";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { KeyPoints } from "../components/KeyPoints/KeyPoints";
import { WhatsNew } from "../components/WhatsNew/WhatsNew";
import { ContentImage } from "../components/Content/Content.styles";
import { ThemedGrid } from "../components/ThemedGrid/ThemedGrid";
import { Paper } from "@material-ui/core";

const useTypeName = () => {
  const [letters, setLetters] = useState<string>("");

  /**
   * Setting up delay between adding elements to letters
   */
  const delay = useCallback((timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  }, []);

  /**
   * Looping through flag while calling delay and handling state
   */
  const handleTypeAnimation = useCallback(async () => {
    let tempLetters = "";
    const name = "Kyle Pacheco";

    for (const letter of name.split("")) {
      tempLetters += letter;
      setLetters(tempLetters);
      await delay(250);
    }
  }, [delay]);

  useEffect(() => {
    void handleTypeAnimation();
  }, [handleTypeAnimation]);

  return letters;
};

export const TypeName = () => {
  const letters = useTypeName();
  return (
    <Grid item xs={12}>
      {letters}
    </Grid>
  );
};
