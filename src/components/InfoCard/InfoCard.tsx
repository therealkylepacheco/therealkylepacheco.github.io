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
  route?: string;
}

export const InfoCard = (props: Props) => {
  const { title, body, img, alt, imgLink, route, ...other } = props;

  const { expanded, handleExpand, handleClickImage, routeTo } = useInfoCard(
    imgLink,
    route
  );

  // KDP TODO: Add key points (bulleted list that displays before summary)

  return (
    <Grid item {...other}>
      <ThemedCard onClick={routeTo} route={route}>
        <CardContentContainer>
          {img && alt && (
            <CardImage
              src={img}
              alt="PlexTrac"
              imgLink={imgLink}
              onClick={handleClickImage}
            />
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
