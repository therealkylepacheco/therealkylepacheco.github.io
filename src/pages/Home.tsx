import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../logo.svg';
import { PageTitle } from '../components/PageTitle';

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
        <PageTitle text="Kyle Pacheco"/>
        <img src={logo} className={classes.logo} alt="logo" />
            </>
    )
}