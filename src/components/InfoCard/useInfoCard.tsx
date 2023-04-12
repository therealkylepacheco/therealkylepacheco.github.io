import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

const useInfoCard = (link?: string, route?: string) => {
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

  return {
    expanded,
    handleExpand,
    handleClickImage,
    routeTo,
  };
};

export default useInfoCard;
