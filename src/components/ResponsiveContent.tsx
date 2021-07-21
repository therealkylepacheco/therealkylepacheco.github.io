import Grid from '@material-ui/core/Grid';
import React from 'react';

export type ResponsiveContentProps = {};

export const ResponsiveContent: React.FC<ResponsiveContentProps> = (props) => {
    const { children } = { ...props };

    return (
        <Grid item container spacing={3} justifyContent="flex-start" alignItems="center">
            {children}
        </Grid>
    )
}
