import ButtonBase from "@material-ui/core/ButtonBase";
import Menu from "@material-ui/core/Menu";
import styled from "styled-components";
import { colors } from "../../theme";

export const navbarHeight = 50;
const buttonSpacing = 15;

export const MenuButtonBase = styled(ButtonBase)`
  border-radius: 5px;
  margin-right: ${buttonSpacing}px;
`;

export const MenuStyled = styled(Menu)`
  & .MuiMenu-root: {
    background-color: ${colors.secondary};
  };
  & .MuiPaper-root: {
    background-color: blue;
  }
`;
