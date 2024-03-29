import { Box, Fade, Grid } from "@material-ui/core";
import React, { useCallback, useContext, useState } from "react";
import { TypingTypography } from "../components/TypingTypography";
import { IntroSubheading } from "../components/IntroSubheading";
import { AppContext } from "../AppContext";

type Props = {
  handleAnimationEnd: () => void;
};

export const IntroAnimation = ({ handleAnimationEnd }: Props) => {
  const { isMobile } = useContext(AppContext);
  const [startAnimation, setStartAnimation] = useState(false);
  const [visible, setVisible] = useState(true);
  const handleDone = useCallback(() => setStartAnimation(true), []);
  const handleHide = useCallback(() => setVisible(false), []);
  const endListener = useCallback(
    ({ style: { opacity } }: HTMLElement) => {
      if (opacity === "0") {
        handleAnimationEnd();
      }
    },
    [handleAnimationEnd]
  );

  return (
    <Fade in={visible} unmountOnExit addEndListener={endListener}>
      <Box
        display="flex"
        style={{ width: "100vw", height: "100vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          alignItems="center"
          justifyContent="center"
          container
          item
          xs={12}
          spacing={4}
        >
          <Grid item xs={12}>
            <TypingTypography
              handleDone={handleDone}
              initialDelay={3000}
              text="Kyle Pacheco"
              typeSpeed={125}
              variant={isMobile ? "h2" : "h1"}
            />
          </Grid>
          <IntroSubheading
            handleHide={handleHide}
            startAnimation={startAnimation}
          />
        </Grid>
      </Box>
    </Fade>
  );
};
