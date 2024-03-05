import React, { useCallback } from "react";
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

/**
 * KDP NOTE: WILL NEED TO BE MADE MOBILE FRIENDLY
 */

export type Props = {
  children: React.ReactNode;
  time: string;
  title: string;
};

export const ExpandableCard = ({ children, time, title }: Props) => {
  const { expanded, gridSize, handleExpand, handleTransitionEnd } =
    useExpandableCard();

  return (
    <GridWithTransition
      onTransitionEnd={handleTransitionEnd}
      item
      xs={12}
      sm={gridSize}
      style={{ height: "100%" }}
    >
      <Card>
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h3">{time}</Typography>
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
