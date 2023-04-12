import { Card, CardActions, CardContent, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../theme";

const IMAGE_WIDTH = "315px";
const IMAGE_HEIGHT = "280px";

export const ThemedCard = styled(Card)`
  background-color: ${colors.primary};
  color: ${colors.picture_background};
`;

export const CardContentContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0px;
`;

export const CardImage = styled.img<{ imgRounded?: boolean }>`
  max-width: ${IMAGE_WIDTH};
  max-height: ${IMAGE_HEIGHT};
  cursor: "pointer";
  background-color: ${colors.picture_background};
  border-radius: 5px;
  padding: 10px;
`;

export const ThemedCardActions = styled(CardActions)`
  justify-content: end;
  padding: 0px;
`;

export const ExpandIconButton = styled(IconButton)<{ expanded?: boolean }>`
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)';
    transform: ${(props) =>
      props.expanded ? "rotate(180deg)" : "rotate(0deg)"};
    color: ${colors.picture_background};
`;
