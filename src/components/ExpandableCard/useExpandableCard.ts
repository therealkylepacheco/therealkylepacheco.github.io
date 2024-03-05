import { GridSize } from "@material-ui/core";
import { useCallback, useState } from "react";

export const useExpandableCard = (link: string) => {
  const [expanded, setExpanded] = useState(false);
  const [gridSize, setGridSize] = useState<GridSize>(6);

  const handleClickImage = useCallback(
    () => (link ? window.open(link, "_blank") : {}),
    [link]
  );

  const handleExpand = useCallback(() => {
    if (!expanded) {
      // opening
      setExpanded(true);
      setGridSize(12);
    } else {
      // closing
      setExpanded(false);
      setGridSize(6);
    }
  }, [expanded]);

  return {
    expanded,
    gridSize,
    handleClickImage,
    handleExpand,
  };
};
