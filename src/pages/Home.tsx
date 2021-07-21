import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Content } from '../components/Content';
import { PageContent } from '../components/PageContent';
import { PageSection } from '../components/PageSection';
import { PageTitle } from '../components/PageTitle';
import { ResponsiveContent } from '../components/ResponsiveContent';
import me from '../images/me.png';

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
          <ResponsiveContent>
          <Content title="NERD"
            body="I currently work as a software developer at Liiingo. The majority of my work is on the front end of a web app in ReactJS. I build custom components based on feature requests, implement UX designs, and interact with a Redux state store."
            img={me}
            alt="Kyle Pacheco"
            imgPosition="left"
          />                
          </ResponsiveContent>
          </>
    )
}