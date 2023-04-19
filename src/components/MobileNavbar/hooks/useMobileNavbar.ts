import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

const useMobileNavbar = () => {
  const history = useHistory();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = useCallback(() => setOpenDrawer(true), []);

  const handleCloseDrawer = useCallback(() => setOpenDrawer(false), []);

  const handleClick = useCallback(
    (route: string) => {
      history.push(route);
      handleCloseDrawer();
    },
    [history, handleCloseDrawer]
  );

  return {
    openDrawer,
    handleClick,
    handleOpenDrawer,
    handleCloseDrawer,
  };
};

export default useMobileNavbar;
