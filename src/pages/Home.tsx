import { makeStyles } from '@material-ui/core';
import React from 'react';
import { PageTitle } from '../components/PageTitle';
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
        <PageTitle text="Kyle Pacheco"/>
        <img src={logo} className={classes.logo} alt="logo" />
            </>
    )
}