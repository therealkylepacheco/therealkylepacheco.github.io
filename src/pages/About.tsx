import { Typography } from '@material-ui/core';
import React from 'react';
import { PageTitle } from '../components/PageTitle';
import { PageSection } from '../components/PageSection';


export const About = () => {
    return (
        <>
            <PageTitle text="About" />
            <PageSection title='Experience'>
                <Typography variant='h1'>Testing</Typography>
            </PageSection>
            <PageSection title='Education'>
                <Typography variant='h2'>Testing</Typography>
            </PageSection>
            <PageSection title='Skills'>
                <Typography variant='h3'>Testing</Typography>
            </PageSection>
        </>
    )
}