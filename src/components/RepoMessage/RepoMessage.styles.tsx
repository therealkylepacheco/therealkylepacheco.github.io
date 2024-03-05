import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { colors } from "../../theme";

export const Message = styled(Typography)`
  color: #ffaf00;
`;

export const Link = styled.a`
  color: #ffaf00;
  text-decoration: none;
  :hover {
    color: #ffffff;
  }
`;
