import AppBar from "@material-ui/core/AppBar";
import ButtonBase from "@material-ui/core/ButtonBase";
import styled from "styled-components";
import { colors } from "../../theme";

const buttonSpacing = "35px";
const navbarRaw = 150;
export const navbarHeight = `${navbarRaw}px`;

export const AppBarStyled = styled(AppBar)`
  background-color: ${colors.primary};
  height: ${navbarHeight};
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
`;

export const NavbarButton = styled(ButtonBase)`
  border-radius: 5px;
  margin-right: ${buttonSpacing};
`;

export const ImageButton = styled.img`
  height: ${navbarHeight};
  width: ${navbarRaw * 1.2}px;
`;
