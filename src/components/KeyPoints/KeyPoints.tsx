import React from "react";
import { Typography } from "@material-ui/core";
import { KeyPointsContainer, KeyPointsDivider } from "./KeyPoints.styles";
import useKeyPoints from "./useKeyPoints";
import { Variant } from "@material-ui/core/styles/createTypography";

interface Props {
  variant: Variant;
  points: string[];
}

export const KeyPoints = (props: Props) => {
  const { variant, points } = props;

  const { lastIndex } = useKeyPoints(points);

  return (
    <KeyPointsContainer>
      {points.map((point, index) => (
        <React.Fragment key={point}>
          <Typography variant={variant}>{point}</Typography>
          {index !== lastIndex ? <KeyPointsDivider /> : null}
        </React.Fragment>
      ))}
    </KeyPointsContainer>
  );
};
