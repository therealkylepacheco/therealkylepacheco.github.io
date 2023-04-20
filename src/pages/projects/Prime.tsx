import React from "react";
import CodePreview from "../../components/CodePreview";
import PageTitle from "../../components/PageTitle";
import RepoMessage from "../../components/RepoMessage";
import { ThemedGrid } from "../../components/ThemedGrid/ThemedGrid";
import { ThemedText } from "../../components/ThemedText/ThemedText";
import Grid from "@material-ui/core/Grid";

export const Prime = () => {
  const title = "Prime Number Generator";
  const repoLink =
    "https://github.com/therealkylepacheco/prime-number-generator";
  const codeOutput = [
    "$ java Main 1 25",
    "2",
    "3",
    "5",
    "7",
    "11",
    "13",
    "17",
    "19",
    "23",
  ];

  return (
    <ThemedGrid container spacing={5} direction="row">
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <PageTitle text={title} />
        </Grid>
        <Grid item xs={12}>
          <RepoMessage link={repoLink} />
        </Grid>
      </Grid>
      <Grid item>
        <ThemedText>
          This is a basic prime number generator written in Java. It was
          developed in IntelliJ through Test Driven Development with JUnit. My
          main goal of this project was to get some experience with TDD and see
          how it affected my coding process. The project has full test coverage.
        </ThemedText>
      </Grid>
      <Grid item>
        <ThemedText>
          Here is some example output from the program. All the prime numbers
          between 1 and 25 are printed to the terminal.
        </ThemedText>
      </Grid>
      <Grid item xs={12}>
        <CodePreview lines={codeOutput} />
      </Grid>
      <Grid item>
        <ThemedText>
          Follow the ReadMe on the repo to try out the project!
        </ThemedText>
      </Grid>
    </ThemedGrid>
  );
};
