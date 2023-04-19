import AppBar from "@material-ui/core/AppBar";
import ButtonBase from "@material-ui/core/ButtonBase";
import styled from "styled-components";
import { colors } from "../../theme";

const buttonSpacing = "35px";
export const navbarRaw = 15;
export const navbarHeight = `${navbarRaw}vh`;
export const mobileNavbarRaw = 7;
export const mobileNavbarHeight = `${mobileNavbarRaw}vh`;

export const AppBarStyled = styled(AppBar)<{ isMobile: boolean }>`
  background-color: ${colors.primary};
  height: ${(props) => (props.isMobile ? mobileNavbarHeight : navbarHeight)};
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
