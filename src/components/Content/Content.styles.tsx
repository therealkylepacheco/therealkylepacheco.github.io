import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { colors } from "../../theme";

const TEXT_WIDTH = 450;
const IMAGE_WIDTH = 315;
const IMAGE_HEIGHT = 280;

export const ContentImage = styled.img`
  max-width: ${IMAGE_WIDTH}px;
  max-height: ${IMAGE_HEIGHT}px;
  cursor: "pointer";
`;

export const ContentTitle = styled(Typography)`
  color: ${colors.primary};
  max-width: ${TEXT_WIDTH}px;
`;

export const ContentBody = styled(Typography)`
  max-width: ${TEXT_WIDTH}px;
`;
