import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { colors } from "../../theme";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const FooterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterText = styled(Typography)`
  color: ${colors.greyLight};
`;
