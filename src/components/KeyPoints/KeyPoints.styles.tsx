import styled from "styled-components";
import { colors } from "../../theme";

export const KeyPointsContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  width: 100%;
  align-items: ${(props) => (props.isMobile ? "center" : "")};
  justify-content: center;
  color: ${colors.secondary};
`;

export const KeyPointsDivider = styled.div`
  border: solid;
  border-width: 1px;
  border-color: ${colors.secondary};
  width: 0px;
  margin: 0px 10px;
`;
