import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../theme";
import { navbarRaw } from "../Navbar/Navbar.styles";

export const ThemedGrid = styled(Grid)`
  background-color: ${colors.background};
  margin-top: ${navbarRaw * 0.3}px;
  border-radius: 10px;
`;
