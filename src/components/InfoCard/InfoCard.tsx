import Grid, { GridProps } from "@material-ui/core/Grid";
import React from "react";
import { Collapse, Typography } from "@material-ui/core";
import {
  CardContentContainer,
  CardImage,
  ExpandIconButton,
  ThemedCard,
  ThemedCardActions,
} from "./InfoCard.styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useInfoCard from "./useInfoCard";

interface Props extends GridProps {
  title: string;
  body?: string;
  img?: string;
  alt?: string;
  imgLink?: string;
}

export const InfoCard = (props: Props) => {
  const { title, body, img, alt, imgLink, ...other } = props;

  const { expanded, handleExpand, handleClickImage } = useInfoCard(imgLink);

  return (
    <Grid item {...other}>
      <ThemedCard>
        <CardContentContainer>
          {img && alt && (
            <CardImage src={img} alt="PlexTrac" onClick={handleClickImage} />
          )}
          <Typography variant="h4">{title}</Typography>
        </CardContentContainer>
        {body && (
          <>
            <ThemedCardActions disableSpacing>
              <ExpandIconButton expanded={expanded} onClick={handleExpand}>
                <ExpandMoreIcon />
              </ExpandIconButton>
            </ThemedCardActions>
            <Collapse in={expanded} unmountOnExit>
              <CardContentContainer>
                <Typography variant="h5">{body}</Typography>
              </CardContentContainer>
            </Collapse>
          </>
        )}
      </ThemedCard>
    </Grid>
  );
};
