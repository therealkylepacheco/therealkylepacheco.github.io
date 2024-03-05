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

export type Props = {
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  link: string;
  time: string;
};

export const ExpandableCard = ({
  children,
  image,
  imageAlt,
  link,
  time,
}: Props) => {
  const {
    expanded,
    gridSize,
    handleClickImage,
    handleExpand,
    handleTransitionEnd,
  } = useExpandableCard(link);

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
            <CardImage alt={imageAlt} onClick={handleClickImage} src={image} />
            <Typography variant="h3">{time}</Typography>
            <CardActions disableSpacing>
              <ExpandIconButton expanded={expanded} onClick={handleExpand}>
                <ExpandMoreIcon />
              </ExpandIconButton>
            </CardActions>
            {/* {expanded && (
              <div onTransitionEnd={(e) => console.log("kdp END: ", e)}>
                {" "}
                {children}{" "}
              </div>
            )} */}
            <Collapse in={expanded} unmountOnExit>
              {children}
            </Collapse>
          </Box>
        </CardContent>
      </Card>
    </GridWithTransition>
  );
};
