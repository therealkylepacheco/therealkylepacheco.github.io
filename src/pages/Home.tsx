import React from 'react';
import { Content } from '../components/Content';
import { PageTitle } from '../components/PageTitle';
import { ResponsiveContent } from '../components/ResponsiveContent';
import me from '../images/me.png';

export const Home = () => {
    return (
        <>
          <PageTitle text="Kyle Pacheco"/>
          <ResponsiveContent>
          <Content
            body="
            Hi! My name is Kyle Pacheco, and I'm a software developer in Boise, ID.

            "
            img={me}
            alt="Kyle Pacheco"
            imgPosition="left"
          />                
          </ResponsiveContent>
          </>
    )
}