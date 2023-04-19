import React from "react";
import useContactButton from "../ContactButton/useContactButton";
import {
  ContactButtonContainer,
  ContactButtonInfo,
  ContactButtonText,
} from "./ContactButtonLarge.styles";

export type ContactButtonLargeProps = {
  link: string;
  title: string;
};

export const ContactButtonLarge: React.FC<ContactButtonLargeProps> = (
  props
) => {
  const { children, link, title } = { ...props };

  const handleClick = useContactButton(link);

  return (
    <ContactButtonContainer>
      <ContactButtonInfo onClick={handleClick}>{children}</ContactButtonInfo>
      <ContactButtonText variant="h3">{title}</ContactButtonText>
    </ContactButtonContainer>
  );
};
