import { useCallback, useEffect, useMemo, useState } from "react";
import { useDelay } from "../../hooks";

export const useIntroSubheading = (startAnimation: boolean) => {
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
  }, [delay, subs]);

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
