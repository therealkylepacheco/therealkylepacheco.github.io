import { useCallback, useEffect, useMemo, useState } from "react";
import { useDelay } from "../../hooks";

type Args = {
  handleHide: () => void;
  startAnimation: boolean;
};

export const useIntroSubheading = ({ handleHide, startAnimation }: Args) => {
  const delay = useDelay();

  const [inCount, setInCount] = useState(0);

  const subs = useMemo(
    () => ["Software Developer", "Web Developer", "Full Stack"],
    []
  );

  const handleStaggeredEntry = useCallback(async () => {
    for (let i = 0; i <= subs.length; i++) {
      setInCount(i);
      await delay(500);
    }
    await delay(750);
    handleHide();
  }, [delay, handleHide, subs]);

  useEffect(() => {
    if (startAnimation) {
      void handleStaggeredEntry();
    }
  }, [handleStaggeredEntry, startAnimation]);

  return {
    inCount,
    subs,
  };
};
