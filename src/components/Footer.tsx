import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import { colors } from "../theme";
import { ContactButton } from "./ContactButton";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    color: colors.greyLight,
  },
});

export type FooterProps = {};

export const Footer = (props: FooterProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography className={classes.text}>Contact Me</Typography>
      <Box className={classes.buttonBox}>
        <ContactButton link="https://github.com/therealkylepacheco">
          <GitHubIcon />
        </ContactButton>
        <ContactButton link="https://linkedin.com/in/kyle-pacheco">
          <LinkedInIcon />
        </ContactButton>
      </Box>
    </Box>
  );
};
