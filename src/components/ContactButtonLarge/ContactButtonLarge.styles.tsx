import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import { colors } from "../../theme";

export const ContactButtonInfo = styled(IconButton)`
  color: ${colors.primary};
`;

export const ContactButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactButtonText = styled(Typography)`
  color: ${colors.primary};
`;
