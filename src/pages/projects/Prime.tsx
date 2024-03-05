import React from "react";
import CodePreview from "../../components/CodePreview";
import RepoMessage from "../../components/RepoMessage";
import Grid from "@material-ui/core/Grid";
import { ProjectParagraphContainer } from "./components/ProjectParagraphContainer";
import { ProjectParagraph } from "./components/ProjectParagraph";

export const Prime = () => {
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
    <Grid container spacing={5} direction="row">
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <RepoMessage link={repoLink} />
        </Grid>
      </Grid>
      <ProjectParagraphContainer>
        <ProjectParagraph>
          This is a basic prime number generator written in Java. It was
          developed in IntelliJ through Test Driven Development with JUnit. My
          main goal of this project was to get some experience with TDD and see
          how it affected my coding process. The project has full test coverage.
        </ProjectParagraph>
        <ProjectParagraph>
          Here is some example output from the program. All the prime numbers
          between 1 and 25 are printed to the terminal.
        </ProjectParagraph>
        <Grid item xs={12}>
          <CodePreview lines={codeOutput} />
        </Grid>
        <ProjectParagraph>
          Follow the ReadMe on the repo to try out the project!
        </ProjectParagraph>
      </ProjectParagraphContainer>
    </Grid>
  );
};
