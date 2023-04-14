import Grid, { GridProps } from "@material-ui/core/Grid";
import React from "react";
import { Collapse, Typography } from "@material-ui/core";
import {
  CardContentContainer,
  CardImage,
  ExpandIconButton,
  InfoCardBody,
  ThemedCard,
  ThemedCardActions,
} from "./InfoCard.styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useInfoCard from "./useInfoCard";
import { KeyPoints } from "../KeyPoints/KeyPoints";

interface Props extends GridProps {
  title: string;
  body?: string;
  img?: string;
  alt?: string;
  imgLink?: string;
  route?: string;
  keyPoints?: string[];
}

export const InfoCard = (props: Props) => {
  const { title, body, img, alt, imgLink, route, keyPoints, ...other } = props;

  const { expanded, handleExpand, handleClickImage, routeTo, bodyPadding } =
    useInfoCard(imgLink, route, keyPoints);

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
        {(body || keyPoints) && (
          <>
            <ThemedCardActions disableSpacing>
              <ExpandIconButton expanded={expanded} onClick={handleExpand}>
                <ExpandMoreIcon />
              </ExpandIconButton>
            </ThemedCardActions>
            <Collapse in={expanded} unmountOnExit>
              <CardContentContainer>
                {keyPoints && <KeyPoints variant="h5" points={keyPoints} />}
                {body && (
                  <InfoCardBody variant="h5" padding={bodyPadding}>
                    {body}
                  </InfoCardBody>
                )}
              </CardContentContainer>
            </Collapse>
          </>
        )}
      </ThemedCard>
    </Grid>
  );
};
