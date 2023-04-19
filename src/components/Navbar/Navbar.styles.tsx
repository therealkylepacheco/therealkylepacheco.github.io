import AppBar from "@material-ui/core/AppBar";
import ButtonBase from "@material-ui/core/ButtonBase";
import styled from "styled-components";
import { colors } from "../../theme";

// KDP TODO: Change to use vh, vw for sizing and make appropriate for mobile view
// KDP TODO: Improve theme color naming

const buttonSpacing = "35px";
export const navbarRaw = 15;
export const navbarHeight = `${navbarRaw}vh`;

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
  width: ${navbarRaw * 1.2}vh;
`;
