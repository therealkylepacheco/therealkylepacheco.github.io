import { useCallback, useState } from "react";

const useInfoCard = (link?: string) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = useCallback(() => setExpanded(!expanded), [expanded]);

  const handleClickImage = useCallback(
    () => (link ? window.open(link, "_blank") : {}),
    [link]
  );

  return {
    expanded,
    handleExpand,
    handleClickImage,
  };
};

export default useInfoCard;
