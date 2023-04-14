import styled from "styled-components";
import { colors } from "../../theme";

export const KeyPointsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const KeyPointsDivider = styled.div`
  border: solid;
  border-width: 1px;
  border-color: ${colors.secondary};
  width: 0px;
  margin: 0px 10px;
`;
