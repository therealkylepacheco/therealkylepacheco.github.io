import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { colors } from "../theme";

const useStyles = makeStyles({
  title: {
    color: colors.primary,
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    maxWidth: 250,
    maxHeight: 100,
  },
});

export type SkillContentProps = {
  title: string;
  img: string;
  alt?: string;
};

export const SkillContent = (props: SkillContentProps) => {
  const { title, img, alt } = { ...props };
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4}>
      <Box className={classes.content}>
        <img src={img} alt={alt} className={classes.image} />
        <Box>
          <Typography className={classes.title} variant="h5">
            {title}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
