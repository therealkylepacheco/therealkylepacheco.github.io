import { Box, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Body } from "./ExperienceContent.styles";
import { AppContext } from "../../AppContext";

type Props = {
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  link: string;
  titles?: string[];
};

export const ExperienceContent = ({ children, titles }: Props) => {
  const { isMobile } = useContext(AppContext);

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* <CardImage alt={imageAlt} onClick={handleClickImage} src={image} /> */}
        {titles &&
          titles.map((title) => (
            <Typography variant={isMobile ? "h4" : "h3"}>{title}</Typography>
          ))}
      </Box>
      <Body variant={isMobile ? "h5" : "h4"}>{children}</Body>
    </>
  );
};
