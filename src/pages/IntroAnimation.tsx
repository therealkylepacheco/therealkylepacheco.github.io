import { Box, Fade, Grid } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { TypingTypography } from "../components/TypingTypography";
import { IntroSubheading } from "../components/IntroSubheading";

export const IntroAnimation = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [visible, setVisible] = useState(true);
  const handleDone = useCallback(() => setStartAnimation(true), []);
  const handleHide = useCallback(() => setVisible(false), []);

  return (
    <Fade in={visible} unmountOnExit>
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
              initialDelay={5000}
              text="Kyle Pacheco"
              typeSpeed={125}
              variant="h1"
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
