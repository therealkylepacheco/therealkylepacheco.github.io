import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ContactButton from "../ContactButton";
import {
  FooterButtonContainer,
  FooterContainer,
  FooterText,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Contact Me</FooterText>
      <FooterButtonContainer>
        <ContactButton link="https://github.com/therealkylepacheco">
          <GitHubIcon />
        </ContactButton>
        <ContactButton link="https://linkedin.com/in/kyle-pacheco">
          <LinkedInIcon />
        </ContactButton>
      </FooterButtonContainer>
    </FooterContainer>
  );
};
