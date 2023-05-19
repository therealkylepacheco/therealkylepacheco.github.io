import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import { colors } from "../../theme";

export const MenuItemStyled = styled(MenuItem)`
  color: ${colors.white};
  transition: 0.3s;
  &: hover {
    background-color: ${colors.highlight};
  }
`;
