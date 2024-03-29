import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../theme";

// const IMAGE_WIDTH = "100%";
const IMAGE_WIDTH = "315px";
const IMAGE_HEIGHT = "280px";

export const ThemedCard = styled(Card)<{
  route?: string;
  hoverEffect?: boolean;
}>`
  background-color: ${(props) =>
    props.hoverEffect ? colors.highlight : colors.primary};
  color: ${colors.secondary};
  cursor: ${(props) => (props.route ? "pointer" : "")};
  transition: 0.3s;
  :hover {
    background-color: ${colors.primary};
  }
`;

export const CardContentContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0px;
`;

export const CardImage = styled.img<{ imgRounded?: boolean; imgLink?: string }>`
  max-width: 100%;
  width: ${IMAGE_WIDTH};
  max-height: ${IMAGE_HEIGHT};
  cursor: ${(props) => (props.imgLink ? "pointer" : "")};
  background-color: ${colors.secondary};
  border-radius: 5px;
  padding: 10px;
`;

export const InfoCardBody = styled(Typography)<{ body_padding?: boolean }>`
  padding-top: ${(props) => (props.body_padding ? "30px" : "")};
`;

export const ThemedCardActions = styled(CardActions)`
  justify-content: end;
  padding: 0px;
`;

export const ExpandIconButton = styled(IconButton)<{ expanded?: boolean }>`
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)';
    transform: ${(props) =>
      props.expanded ? "rotate(180deg)" : "rotate(0deg)"};
    color: ${colors.secondary};
`;
