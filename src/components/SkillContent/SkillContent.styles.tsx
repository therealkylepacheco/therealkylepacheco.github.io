import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { colors } from "../../theme";
import { Paper, makeStyles } from "@material-ui/core";

export const SkillTitle = styled(Typography)`
  color: ${colors.secondary};
`;

export const SkillContainer = styled(Paper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.primary};
`;

export const SkillImage = styled.img`
  max-width: 250px;
  max-height: 100px;
`;

export const useStyles = makeStyles({
  popper: {
    "& .MuiTooltip-tooltip": {
      backgroundColor: colors.secondary,
      color: colors.primary,
    },
  },
});
