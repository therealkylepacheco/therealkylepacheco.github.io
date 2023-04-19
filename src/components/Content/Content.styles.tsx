import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { colors } from "../../theme";

const TEXT_WIDTH = 450;

export const ContentImage = styled.img<{ imgRounded?: boolean }>`
  width: 315px;
  max-width: 95%;
  max-height: 280px;
  cursor: "pointer";
  border-radius: ${(p) => (p.imgRounded ? "50%" : "0%")};
`;

export const ContentTitle = styled(Typography)`
  color: ${colors.primary};
  max-width: ${TEXT_WIDTH}px;
`;

export const ContentBody = styled(Typography)`
  max-width: ${TEXT_WIDTH}px;
`;
