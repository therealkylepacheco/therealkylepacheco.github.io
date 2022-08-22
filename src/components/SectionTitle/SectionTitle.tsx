import React from "react";
import { Title } from "./SectionTitle.styles";

export type SectionTitleProps = {
  title: string;
};

export const SectionTitle = (props: SectionTitleProps) => {
  const { title } = { ...props };

  return <Title variant="h4">{title}</Title>;
};
