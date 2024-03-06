import {
  Box,
  CssBaseline,
  Fade,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { themeOptions } from "./theme";

import useMobilePage from "./pages/hooks/useMobilePage";
import { IntroAnimation } from "./pages/IntroAnimation";
import { Intro } from "./pages/Intro";
import { Navigation } from "./components/Navigation";
import { Skills } from "./pages/Skills";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Education } from "./pages/Education";
import { FooterUpdated } from "./components/FooterUpdated/FooterUpdated";
import { AppContext } from "./AppContext";

function App() {
  const isMobile = useMobilePage(700);

  const theme = createTheme(themeOptions);

  // const [showContent, setShowContent] = useState(true);
  // const [enableScroll, setEnableScroll] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [enableScroll, setEnableScroll] = useState(false);
  const handleAnimationEnd = useCallback(() => setShowContent(true), []);

  const endListener = useCallback((_el: HTMLElement) => {
    setEnableScroll(true);
  }, []);

  return (
    <AppContext.Provider value={{ isMobile }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          style={{
            height: "100vh",
            overflowY: enableScroll ? "auto" : "hidden",
            overflowX: "hidden",
            scrollbarColor: "#973700 transparent",
          }}
        >
          <IntroAnimation handleAnimationEnd={handleAnimationEnd} />
          <Fade
            in={showContent}
            timeout={1000}
            addEndListener={endListener}
            unmountOnExit
          >
            <Box display="flex" flexDirection="column" padding="32px">
              <Intro />
              <Navigation />
              <Experience />
              <Skills />
              <Projects />
              <Education />
              <FooterUpdated />
            </Box>
          </Fade>
        </Box>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
