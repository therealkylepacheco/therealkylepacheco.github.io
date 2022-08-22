import React from "react";
import { ContactButtonStyle } from "./ContactButton.styles";
import useContactButton from "./useContactButton";

export type ContactButtonProps = {
  link: string;
};

export const ContactButton: React.FC<ContactButtonProps> = (props) => {
  const { children, link } = { ...props };

  const handleClick = useContactButton(link);

  return (
    <ContactButtonStyle onClick={handleClick}>{children}</ContactButtonStyle>
  );
};
