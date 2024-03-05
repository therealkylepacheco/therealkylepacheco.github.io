import { GridSize } from "@material-ui/core";
import { useCallback, useState } from "react";

export const useExpandableCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [gridSize, setGridSize] = useState<GridSize>(6);

  const handleExpand = useCallback(() => {
    if (!expanded) {
      // opening
      setGridSize(12);
    } else {
      // closing
      setExpanded(false);
      setGridSize(6);
    }
  }, [expanded]);

  const handleTransitionEnd = useCallback(() => {
    if (gridSize === 12) {
      setExpanded(true);
    }
    return;
  }, [gridSize]);

  return {
    expanded,
    gridSize,
    handleExpand,
    handleTransitionEnd,
  };
};
