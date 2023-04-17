import { makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { navbarHeight } from "./components/Navbar/Navbar.styles";
import pages from "./pages/index";
import { colors } from "./theme";

// transparenttextures.com
import diamond from "./images/backgrounds/diamond-upholstery.png";

const useStyles = makeStyles({
  app: {
    minHeight: "100vh",
    backgroundColor: colors.background,
    backgroundImage: `url(${diamond})`,
  },
  content: {
    padding: navbarHeight,
    display: "flex",
    flexDirection: "column",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Navbar options={pages} />
      <div className={classes.content}>
        <Switch>
          {pages.map((page) => {
            // return (
            //   <Route
            //     key={page.route}
            //     exact={page.title === "Home"}
            //     path={page.route}
            //     component={page.comp}
            //   />
            // );
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
              // return (
              //   <Route path={page.route} component={page.comp}>
              //     {page.subRoutes.map((sub) => (
              //       <Route
              //         key={`${page.route}${sub.route}`}
              //         path={`${page.route}${sub.route}`}
              //         component={sub.comp}
              //       />
              //     ))}
              //   </Route>
              // );
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
