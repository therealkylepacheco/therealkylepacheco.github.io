import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {
  SkillContainer,
  SkillImage,
  SkillTitle,
  useStyles,
} from "./SkillContent.styles";
import { Tooltip, Typography } from "@material-ui/core";

export type SkillContentProps = {
  title: string;
  experience?: string;
  img: string;
  alt?: string;
};

export const SkillContent = (props: SkillContentProps) => {
  const { title, img, alt, experience } = { ...props };

  const { popper } = useStyles();

  return (
    <Grid item xs={12} sm={4}>
      <Tooltip
        classes={{ popper }}
        title={
          experience ? <Typography variant="h5">{experience}</Typography> : ""
        }
      >
        <SkillContainer>
          <SkillImage src={img} alt={alt} />
          <Box>
            <SkillTitle variant="h5">{title}</SkillTitle>
          </Box>
        </SkillContainer>
      </Tooltip>
    </Grid>
  );
};
