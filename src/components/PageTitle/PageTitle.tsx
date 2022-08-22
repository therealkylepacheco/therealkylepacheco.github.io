import React from "react";
import { Title } from "./PageTitle.styles";

export type PageTitleProps = {
  text: string;
};

export const PageTitle = (props: PageTitleProps) => {
  const { text } = { ...props };

  return <Title variant="h2">{text}</Title>;
};
