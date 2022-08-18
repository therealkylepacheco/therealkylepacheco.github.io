import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { colors } from "../theme";

const TEXT_WIDTH = 450;
const IMAGE_WIDTH = 315;
const IMAGE_HEIGHT = 280;

const useStyles = makeStyles({
  title: {
    color: colors.primary,
    maxWidth: TEXT_WIDTH,
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  body: {
    maxWidth: TEXT_WIDTH,
  },
  image: {
    maxWidth: IMAGE_WIDTH,
    maxHeight: IMAGE_HEIGHT,
    cursor: "pointer",
  },
});

export type ContentProps = {
  title?: string;
  body?: string;
  img?: string;
  alt?: string;
  link?: string;
  imgPosition?: "left" | "right";
};

const defaultProps: Partial<ContentProps> = {
  imgPosition: "right",
};

export const Content: React.FC<ContentProps> = (props) => {
  const { title, img, alt, imgPosition, link, children } = {
    ...defaultProps,
    ...props,
  };
  const classes = useStyles();

  const handleClick = () => (link ? window.open(link, "_blank") : {});

  return (
    <Grid item container alignItems="center" xs={12} spacing={3}>
      {img && imgPosition === "left" && (
        <Grid item>
          <img
            src={img}
            alt={alt}
            className={classes.image}
            onClick={handleClick}
          />
        </Grid>
      )}
      <Grid item>
        <Box>
          {title && (
            <Typography className={classes.title} variant="h5">
              {title}
            </Typography>
          )}
          <Typography className={classes.body} variant="body1">
            {children}
          </Typography>
        </Box>
      </Grid>
      {img && imgPosition === "right" && (
        <Grid item>
          <img
            src={img}
            alt={alt}
            className={classes.image}
            onClick={handleClick}
          />
        </Grid>
      )}
    </Grid>
  );
};
