import { Theme, makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import {
  mobileNavbarHeight,
  navbarHeight,
  navbarRaw,
} from "./components/Navbar/Navbar.styles";
import pages from "./pages/index";
import { MOBILE_NAV_BREAKPOINT, colors } from "./theme";

// transparenttextures.com
import diamond from "./images/backgrounds/diamond-upholstery.png";
import useMobilePage from "./pages/hooks/useMobilePage";

const useStyles = makeStyles<Theme, { isMobile: boolean }>({
  app: {
    minHeight: "100vh",
    backgroundColor: colors.background,
    backgroundImage: `url(${diamond})`,
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

  return (
    <div className={classes.app}>
      <Navbar options={pages} />
      <div className={classes.content}>
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
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
