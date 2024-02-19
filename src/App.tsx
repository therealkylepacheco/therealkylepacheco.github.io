import {
  CssBaseline,
  Fade,
  Grid,
  Paper,
  Theme,
  ThemeProvider,
  Typography,
  createTheme,
  makeStyles,
} from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import {
  mobileNavbarHeight,
  navbarHeight,
  navbarRaw,
} from "./components/Navbar/Navbar.styles";
import pages from "./pages/index";
import { MOBILE_NAV_BREAKPOINT, colors, themeOptions } from "./theme";

// transparenttextures.com
import diamond from "./images/backgrounds/diamond-upholstery.png";
import useMobilePage from "./pages/hooks/useMobilePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { TypeName } from "./pages/TypeName";
import { useDelay, useTypeEffect } from "./hooks";
import { TypingTypography } from "./components/TypingTypography";

const useStyles = makeStyles<Theme, { isMobile: boolean }>({
  app: {
    maxHeight: "100vh",
    minHeight: "100vh",
    backgroundColor: colors.background,
    // backgroundImage: `url(${diamond})`,
  },
  content: {
    paddingTop: ({ isMobile }) =>
      isMobile ? mobileNavbarHeight : navbarHeight,
    paddingBottom: ({ isMobile }) =>
      isMobile ? mobileNavbarHeight : navbarHeight,
    paddingLeft: `${navbarRaw}vw`,
    paddingRight: `${navbarRaw}vw`,
    display: "flex",
    flexDirection: "column",
  },
});

function App() {
  const isMobile = useMobilePage(MOBILE_NAV_BREAKPOINT);
  const classes = useStyles({ isMobile });

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        item
        xs={12}
        style={{ height: "100vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <TypingTypography
          initialDelay={5000}
          text="Kyle Pacheco"
          typeSpeed={175}
          variant="h1"
        />
      </Grid>
    </ThemeProvider>
  );

  return (
    <div className={classes.app}>
      {/* <Navbar options={pages} /> */}
      <div className={classes.content}>
        {/* <ScrollToTop />
        <Switch>
          {pages.map((page) => {
            if (page.subRoutes) {
              let baseRoute = (
                <Route
                  key={page.route}
                  path={page.route}
                  component={page.comp}
                />
              );
              let subRoutes = page.subRoutes.map((sub) => {
                let route = `${page.route}${sub.route}`;
                return (
                  <Route
                    key={route}
                    path={route}
                    component={sub.comp}
                    exact={true}
                  />
                );
              });
              return [...subRoutes, baseRoute];
            } else {
              return (
                <Route
                  key={page.route}
                  exact={page.title === "Home"}
                  path={page.route}
                  component={page.comp}
                />
              );
            }
          })}
        </Switch> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
