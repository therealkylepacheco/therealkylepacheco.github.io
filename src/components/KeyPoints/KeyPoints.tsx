import React from "react";
import { Typography } from "@material-ui/core";
import { KeyPointsContainer, KeyPointsDivider } from "./KeyPoints.styles";
import useKeyPoints from "./useKeyPoints";
import { Variant } from "@material-ui/core/styles/createTypography";
import useMobilePage from "../../pages/hooks/useMobilePage";
import { Maximize } from "@material-ui/icons";

interface Props {
  variant: Variant;
  points: string[];
}

export const KeyPoints = (props: Props) => {
  const { variant, points } = props;

  const { lastIndex } = useKeyPoints(points);

  const isMobile = useMobilePage();

  return (
    <KeyPointsContainer isMobile={isMobile}>
      {points.map((point, index) => (
        <React.Fragment key={point}>
          <Typography variant={variant}>{point}</Typography>
          {index !== lastIndex ? (
            isMobile ? (
              <Maximize fontSize="small" />
            ) : (
              <KeyPointsDivider />
            )
          ) : null}
        </React.Fragment>
      ))}
    </KeyPointsContainer>
  );
};
