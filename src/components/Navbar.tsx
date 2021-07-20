import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { colors } from '../theme';
import { MenuButton } from './MenuButton';
import { MenuOption } from './MenuOption';

export const navbarHeight = 50;
const buttonSpacing = 15;

const useStyles = makeStyles({
  appBar: {
    backgroundColor: colors.primary,
    height: navbarHeight,
  },
  box: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      alignItems: 'center',
      marginLeft: buttonSpacing,
  },
  button: {
      borderRadius: 5,
      marginRight: buttonSpacing,
  },
});

type NavbarOption = {
    title: string,
    route: string,
    subRoutes?: NavbarOption[],
}


export type NavbarProps = {
    options: NavbarOption[]
}

export const Navbar = (props: NavbarProps) => {
    const { options } = { ...props };
    const classes = useStyles();
    const history = useHistory();

    const routeTo = (route: string) => {
        history.push(route);
    }
    
    return (
        <AppBar className={classes.appBar}>
            <Box className={classes.box}>
                {options.map( ( option ) => {
                    if (option.subRoutes) {
                        return(
                            <MenuButton title={option.title}>
                                {
                                    option.subRoutes.map( (sub) => {
                                        let route = `${option.route}${sub.route}`;
                                        return (
                                            <MenuOption key={route} title={sub.title} route={route} />
                                        )
                                    })
                                }
                            </MenuButton>
                        )
                    }
                    else {
                    return(
                        <ButtonBase key={option.route} className={classes.button} onClick={() => routeTo(option.route)}>
                            <Typography variant="h6">
                                {option.title}
                            </Typography>
                        </ButtonBase>
                    )
                    }
                })}
            </Box>
        </AppBar>
    )
}