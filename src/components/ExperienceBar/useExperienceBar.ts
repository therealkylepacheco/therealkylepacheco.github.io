import { GridSize } from "@material-ui/core";
import { useCallback, useMemo, useState } from "react";

export const useExperienceBar = (value: number) => {
  const [showLevel, setShowLevel] = useState(false);

  const handleMouseEnter = useCallback(() => setShowLevel(true), []);
  const handleMouseLeave = useCallback(() => setShowLevel(false), []);

  const skillSize = useMemo(
    () => Math.floor(12 * (value / 100)) as GridSize,
    [value]
  );

  return {
    handleMouseEnter,
    handleMouseLeave,
    showLevel,
    skillSize,
  };
};
