import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import { ContactButtonLarge } from '../components/ContactButtonLarge';
import { PageTitle } from '../components/PageTitle';

const useStyles = makeStyles({
    icon: {
      fontSize: 120,
    },
  })


export const Contact = () => {
    const classes = useStyles();

    return (
        <>
        <PageTitle text="Contact Me"/>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6}>
            <ContactButtonLarge title="Github" link='https://github.com/therealkylepacheco'>
              <GitHubIcon className={classes.icon}/>
            </ContactButtonLarge>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContactButtonLarge title="LinkedIn" link='https://linkedin.com/in/kyle-pacheco'>
              <LinkedInIcon className={classes.icon}/>
            </ContactButtonLarge>
          </Grid>
        </Grid>
        </>
    )
}