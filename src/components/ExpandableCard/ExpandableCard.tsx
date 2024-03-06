import React, { useCallback, useContext } from "react";
import ittLogo from "../images/inTimeTec.png";
import kountLogo from "../images/kount.png";
import liiingoLogo from "../images/liiingo.png";
import plextracLogo from "../images/plextrac.png";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useExpandableCard } from "./useExpandableCard";
import {
  CardImage,
  ExpandIconButton,
  GridWithTransition,
} from "./ExpandableCard.styles";
import { AppContext } from "../../AppContext";

/**
 * KDP NOTE: WILL NEED TO BE MADE MOBILE FRIENDLY
 */

export type Props = {
  children: React.ReactNode;
  time?: string;
  title: string;
};

export const ExpandableCard = ({ children, time, title }: Props) => {
  const { expanded, gridSize, handleExpand, handleTransitionEnd } =
    useExpandableCard();

  const { isMobile } = useContext(AppContext);

  return (
    <GridWithTransition
      onTransitionEnd={handleTransitionEnd}
      item
      xs={12}
      sm={12}
      md={12}
      lg={gridSize}
      style={{ overflow: "auto" }}
    >
      <Card>
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Typography variant={isMobile ? "h3" : "h2"}>{title}</Typography>
            {time && (
              <Typography variant={isMobile ? "h4" : "h3"}>{time}</Typography>
            )}
            <CardActions disableSpacing>
              <ExpandIconButton expanded={expanded} onClick={handleExpand}>
                <ExpandMoreIcon />
              </ExpandIconButton>
            </CardActions>
            <Collapse in={expanded} unmountOnExit>
              {children}
            </Collapse>
          </Box>
        </CardContent>
      </Card>
    </GridWithTransition>
  );
};
