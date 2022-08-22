import AppBar from "@material-ui/core/AppBar";
import ButtonBase from "@material-ui/core/ButtonBase";
import styled from "styled-components";
import { colors } from "../../theme";

export const navbarHeight = 50;
const buttonSpacing = 15;

export const AppBarStyled = styled(AppBar)`
  background-color: ${colors.primary};
  height: ${navbarHeight};
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  margin-left: ${buttonSpacing};
`;

export const NavbarButton = styled(ButtonBase)`
  border-radius: 5px;
  margin-right: ${buttonSpacing}px;
`;
