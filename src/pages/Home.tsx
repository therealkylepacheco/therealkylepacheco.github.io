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
            Software development is an incredibly interesting career so far. Building out new products
            and solving complex problems while collaborating with my teammates are the highlights of my 
            day to day. Both frontend and backend development interest me and I have experience in both.
            Outside of work, I enjoy reading and trying new things with my friends. 
            "
            img={me}
            alt="Kyle Pacheco"
            imgPosition="left"
          />                
          </ResponsiveContent>
          </>
    )
}