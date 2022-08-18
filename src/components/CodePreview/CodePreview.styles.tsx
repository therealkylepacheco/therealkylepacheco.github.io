import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { colors } from "../../theme";

export const Code = styled(Typography)`
  font-family: Courier New;
  font-weight: 900;
  color: ${colors.white};
`;

export const CodeOutput = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  border-radius: 5px;
  padding-left: 25px;
  max-width: 500px;
  margin: 0 25px;
`;
