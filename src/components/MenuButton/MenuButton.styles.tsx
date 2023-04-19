import ButtonBase from "@material-ui/core/ButtonBase";
import Menu from "@material-ui/core/Menu";
import styled from "styled-components";
import { colors } from "../../theme";

export const navbarHeight = 50;
const buttonSpacing = 35;

export const MenuButtonBase = styled(ButtonBase)`
  border-radius: 5px;
  margin-right: ${buttonSpacing}px;
`;

export const MenuStyled = styled(Menu)`
  & .muimenu-root: {
    background-color: ${colors.primary};
  }
  & .muipaper-root: {
    background-color: blue;
  }
`;
