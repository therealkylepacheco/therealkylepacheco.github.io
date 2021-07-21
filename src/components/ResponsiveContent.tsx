import Grid from '@material-ui/core/Grid';
import React from 'react';
import { SectionTitle } from './SectionTitle';

export type ResponsiveContentProps = {
    sectionTitle?: string;
};

export const ResponsiveContent: React.FC<ResponsiveContentProps> = (props) => {
    const { children, sectionTitle } = { ...props };

    return (
        <>
            { sectionTitle && <SectionTitle title={sectionTitle}/>}
            <Grid item container spacing={3} justifyContent="flex-start" alignItems="center">
                {children}
            </Grid>
        </>
    )
}
