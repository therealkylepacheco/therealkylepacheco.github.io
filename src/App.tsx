import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, navbarHeight } from './components/Navbar';
import { Footer } from './components/Footer';
import pages from './pages/index';
import { colors } from './theme';

const useStyles = makeStyles({
  app: {
    minHeight: '100vh',
    backgroundColor: colors.background,
  },
  content: {
    padding: navbarHeight,
  },
})

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.app}>
      <Navbar options={pages}/>
      <div className={classes.content}>
        <Switch>
          {pages.map( (page) => {
            if (page.subRoutes) {
              return (
              page.subRoutes.map( (sub) => {
                let route = `${page.route}${sub.route}`;
                return (
                  <Route key={route} path={route} component={sub.comp} />
                )
              })
          )
            }
            else {
              return (
                <Route key={page.route} exact={page.title === 'Home'} path={page.route} component={page.comp}/>
              )
            }
          })}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
