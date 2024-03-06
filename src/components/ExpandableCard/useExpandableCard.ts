import { GridSize } from "@material-ui/core";
import { useCallback, useState } from "react";
import useMobilePage from "../../pages/hooks/useMobilePage";

export const useExpandableCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [gridSize, setGridSize] = useState<GridSize>(6);

  const isMobile = useMobilePage(1280);

  const handleExpand = useCallback(() => {
    if (isMobile) {
      setExpanded(!expanded);
      return;
    }

    if (!expanded) {
      // opening
      setGridSize(12);
    } else {
      // closing
      setExpanded(false);
      setGridSize(6);
    }
  }, [expanded, isMobile]);

  const handleTransitionEnd = useCallback(() => {
    if (isMobile) {
      return;
    }
    if (gridSize === 12) {
      setExpanded(true);
    }
    return;
  }, [gridSize, isMobile]);

  return {
    expanded,
    gridSize,
    handleExpand,
    handleTransitionEnd,
  };
};
