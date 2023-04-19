import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { colors } from "../../theme";

export const Message = styled(Typography)`
  color: ${colors.secondary};
`;

export const Link = styled.a`
  color: ${colors.link};
  text-decoration: none;
`;
