import React from "react";
import { Typography } from "@material-ui/core";
import { KeyPointsContainer, KeyPointsDivider } from "./KeyPoints.styles";
import useKeyPoints from "./useKeyPoints";

interface Props {
  points: string[];
}

export const KeyPoints = (props: Props) => {
  const { points } = props;

  const { lastIndex } = useKeyPoints(points);

  return (
    <KeyPointsContainer>
      {points.map((point, index) => (
        <>
          <Typography variant="h5">{point}</Typography>
          {index !== lastIndex ? <KeyPointsDivider /> : null}
        </>
      ))}
    </KeyPointsContainer>
  );
};
