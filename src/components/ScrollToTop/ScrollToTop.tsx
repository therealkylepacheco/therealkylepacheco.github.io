import { useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";

export const ScrollToTop = () => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => unlisten();
  }, [history]);

  return null;
};

export default withRouter(ScrollToTop);
