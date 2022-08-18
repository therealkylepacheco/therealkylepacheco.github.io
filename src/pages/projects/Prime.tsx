import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { CodePreview } from "../../components/CodePreview";
import { PageTitle } from "../../components/PageTitle";
import { RepoMessage } from "../../components/RepoMessage";

const useStyles = makeStyles({
  desc: {
    maxWidth: 750,
  },
});

export const Prime = () => {
  const classes = useStyles();
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
    <>
      <PageTitle text="Prime Number Generator" />
      <RepoMessage link="https://github.com/therealkylepacheco/prime-number-generator" />
      <Typography className={classes.desc} variant="h6">
        This is a basic prime number generator written in Java. It was developed
        in IntelliJ through Test Driven Development with JUnit. My main goal of
        this project was to get some experience with TDD and see how it affected
        my coding process. The project has full test coverage.
      </Typography>
      <Typography className={classes.desc} variant="h6">
        Here is some example output from the program. All the prime numbers
        between 1 and 25 are printed to the terminal.
      </Typography>
      <CodePreview lines={codeOutput} />
      <Typography variant="h6">
        Follow the ReadMe on the repo to try out the project!
      </Typography>
    </>
  );
};
