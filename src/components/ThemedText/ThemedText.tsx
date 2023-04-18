import React from "react";
import { Text } from "./ThemedText.styles";

export const ThemedText: React.FC = (props) => {
  const { children } = props;

  return <Text variant="h6">{children}</Text>;
};
