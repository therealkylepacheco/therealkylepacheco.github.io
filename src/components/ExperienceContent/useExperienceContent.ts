import { useCallback } from "react";

export const useExperienceContent = (link: string) => {
  const handleClickImage = useCallback(
    () => (link ? window.open(link, "_blank") : {}),
    [link]
  );
  return {
    handleClickImage,
  };
};
