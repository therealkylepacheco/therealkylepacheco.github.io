import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { colors } from "../../theme";

export const SkillTitle = styled(Typography)`
  color: ${colors.primary};
`;

export const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SkillImage = styled.img`
  max-width: 250px;
  max-height: 100px;
`;
