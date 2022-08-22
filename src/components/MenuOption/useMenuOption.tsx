import { useCallback } from "react";
import { useHistory } from "react-router-dom";

export const useMenuOption = () => {
  const history = useHistory();

  const routeTo = useCallback(
    (route: string) => {
      history.push(route);
    },
    [history]
  );

  return {
    routeTo,
  };
};
