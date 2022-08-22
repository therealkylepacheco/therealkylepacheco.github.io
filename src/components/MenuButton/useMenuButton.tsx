import { useCallback, useRef, useState } from "react";

export const useMenuButton = () => {
  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return {
    anchor,
    open,
    handleClick,
  };
};
