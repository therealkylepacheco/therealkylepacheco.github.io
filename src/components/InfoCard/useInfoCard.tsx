import { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

const useInfoCard = (link?: string, route?: string, keyPoints?: string[]) => {
  const [expanded, setExpanded] = useState(false);

  const history = useHistory();

  const routeTo = useCallback(
    () => (route ? history.push(route) : {}),
    [history, route]
  );

  const handleExpand = useCallback(() => setExpanded(!expanded), [expanded]);

  const handleClickImage = useCallback(
    () => (link ? window.open(link, "_blank") : {}),
    [link]
  );

  const bodyPadding: boolean = useMemo(
    () => (keyPoints ? keyPoints.length > 0 : false),
    [keyPoints]
  );

  return {
    expanded,
    handleExpand,
    handleClickImage,
    routeTo,
    bodyPadding,
  };
};

export default useInfoCard;
