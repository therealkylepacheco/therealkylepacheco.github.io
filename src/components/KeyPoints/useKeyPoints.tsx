import { useMemo } from "react";

const useKeyPoints = (points: string[]) => {
  const lastIndex = useMemo(() => points.length - 1, [points]);

  return {
    lastIndex,
  };
};

export default useKeyPoints;
