import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../logo.svg';

const useStyles = makeStyles({
    logo: {
      width: '25%',
      height: '25%',
    },
  })


export const Home = () => {
    const classes = useStyles();

    return (
        <>
        <img src={logo} className={classes.logo} alt="logo" />
            <Typography variant="h1">
                Kyle Pacheco
            </Typography>
            </>
    )
}