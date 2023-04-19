import { useMediaQuery } from "@material-ui/core";

const defaultWidth = 760;

const useMobilePage = (width?: number) => {
  const showMobile = useMediaQuery(`(max-width: ${width ?? defaultWidth}px)`);

  return showMobile;
};

export default useMobilePage;
