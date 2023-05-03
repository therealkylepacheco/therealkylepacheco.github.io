import { useMemo } from "react";
import useMobilePage from "../../pages/hooks/useMobilePage";
import { itchMobileWidth, itchWidth } from "./constants";

export const useItchWidget = (title: string) => {
  const isMobile = useMobilePage(800);

  const width = useMemo(
    () => (isMobile ? itchMobileWidth : itchWidth),
    [isMobile]
  );

  const gameLink = useMemo(
    () => `https://therealkylepacheco.itch.io/${title.toLowerCase()}`,
    [title]
  );

  return { gameLink, width };
};
