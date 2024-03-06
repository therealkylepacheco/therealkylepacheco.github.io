import { useCallback } from "react";

export const useDelay = () => {
  const delay = useCallback((timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  }, []);

  return delay;
};
