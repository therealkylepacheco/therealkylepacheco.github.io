import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { colors } from "../theme";

const useStyles = makeStyles({
  codeOutput: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.secondary,
    borderRadius: 5,
    paddingLeft: 25,
    maxWidth: 500,
    marginTop: 25,
    marginBottom: 25,
  },
  code: {
    fontFamily: "Courier New",
    fontWeight: 900,
    color: colors.white,
  },
});

export type CodePreviewProps = {
  lines: string[];
};

export const CodePreview = (props: CodePreviewProps) => {
  const { lines } = { ...props };
  const classes = useStyles();
  return (
    <Box className={classes.codeOutput}>
      {lines.map((line) => (
        <Typography className={classes.code}>{line}</Typography>
      ))}
    </Box>
  );
};
