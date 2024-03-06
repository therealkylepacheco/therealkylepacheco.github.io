import { useCallback } from "react";

const useContactButton = (link: string) => {
  const handleClick = useCallback(() => window.open(link, "_blank"), [link]);

  return handleClick;
};

export default useContactButton;
