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

  /**
   * Kickoff when flag changes
   */
  useEffect(() => {
    void handleTypeAnimation();
  }, [handleTypeAnimation]);

  return letters;
};

export const Home = () => {
  const letters = useTypeName();
  return (
    <ThemedGrid container>
      <Grid item xs={12}>
        KYLE PACHECO
      </Grid>
      {/* <Grid container item spacing={2}>
        <Grid container item alignItems="center" justifyContent="center">
          <PageTitle text="Kyle Pacheco" />
          <ContentImage imgRounded alt="Kyle Pacheco" src={me} />
        </Grid>
        <Grid item xs={12}>
          <KeyPoints
            variant="h4"
            points={["Software", "Frontend", "Backend", "Web Dev"]}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        xs={12}
      >
        <InfoCard
          title="Experience"
          route="/experience"
          xs={12}
          sm={4}
          hoverEffect
        />
        <InfoCard
          title="Projects"
          route="/projects"
          xs={12}
          sm={4}
          hoverEffect
        />
        <InfoCard title="Skills" route="/skills" xs={12} sm={4} hoverEffect />
      </Grid>
      <WhatsNew /> */}
    </ThemedGrid>
  );
};
