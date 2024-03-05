import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Body } from "./ExperienceContent.styles";
import { useExperienceContent } from "./useExperienceContent";
import { CardImage } from "../ExpandableCard/ExpandableCard.styles";

type Props = {
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  link: string;
  titles?: string[];
};

export const ExperienceContent = ({
  children,
  image,
  imageAlt,
  link,
  titles,
}: Props) => {
  const { handleClickImage } = useExperienceContent(link);

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* <CardImage alt={imageAlt} onClick={handleClickImage} src={image} /> */}
        {titles &&
          titles.map((title) => <Typography variant="h3">{title}</Typography>)}
      </Box>
      <Body variant="h4">{children}</Body>
    </>
  );
};
