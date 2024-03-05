import { Grid, IconButton } from "@material-ui/core";
import styled from "styled-components";

export const GridWithTransition = styled(Grid)`
  transition: all 0.5s ease-in-out;
`;

export const CardImage = styled.img`
  background-color: #ffaf00;
  border-radius: 10px;
  maxwidth: 470px;
  padding: 8px;
  width: 75%;
`;

export const ExpandIconButton = styled(IconButton)<{ expanded?: boolean }>`
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)';
    transform: ${(props) =>
      props.expanded ? "rotate(180deg)" : "rotate(0deg)"};
    color: #ffaf00;
`;
