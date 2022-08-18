import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { PageTitle } from "../../components/PageTitle";

const useStyles = makeStyles({
  desc: {
    maxWidth: 750,
  },
});

export const Chess = () => {
  const classes = useStyles();

  return (
    <>
      <PageTitle text="Chess" />
      <Typography className={classes.desc} variant="h6">
        Work in progress. Check back later for more updates.
      </Typography>
    </>
  );
};
