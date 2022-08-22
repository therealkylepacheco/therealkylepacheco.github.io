import { useCallback } from "react";

const useContent = (link?: string) => {
  const handleClick = useCallback(
    () => (link ? window.open(link, "_blank") : {}),
    [link]
  );
  return handleClick;
};

export default useContent;
