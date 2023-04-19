import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import { colors } from "../../theme";
import { ListItem } from "@material-ui/core";

export const MenuIconStyled = styled(MenuIcon)`
  color: ${colors.secondary};
`;

export const ThemedListItem = styled(ListItem)`
  color: ${colors.secondary};
  background-color: ${colors.primary};
  justify-content: center;
  display: flex;
  transition: 0.3s;
  :hover {
    background-color: ${colors.highlight};
  }
  :active {
    background-color: ${colors.highlight};
  }
`;
