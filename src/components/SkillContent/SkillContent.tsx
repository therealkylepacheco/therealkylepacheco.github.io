import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { SkillContainer, SkillImage, SkillTitle } from "./SkillContent.styles";

export type SkillContentProps = {
  title: string;
  img: string;
  alt?: string;
};

export const SkillContent = (props: SkillContentProps) => {
  const { title, img, alt } = { ...props };

  return (
    <Grid item xs={12} sm={4}>
      <SkillContainer>
        <SkillImage src={img} alt={alt} />
        <Box>
          <SkillTitle variant="h5">{title}</SkillTitle>
        </Box>
      </SkillContainer>
    </Grid>
  );
};
