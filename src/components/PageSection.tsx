import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { colors } from '../theme';

const useStyles = makeStyles({
  pageSection: {
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.tertiary,
  },
  title: {
      color: colors.primary,
      marginTop: 25,
  },
});

export type PageSectionProps = {
    title: string
}

export const PageSection: React.FC<PageSectionProps> = (props) => {
    const { children, title } = { ...props };
    const classes = useStyles();
    
    return (
        <>
                <Typography className={classes.title} variant='h4'>{title}</Typography>
                <Box className={classes.pageSection}>
                    {children}
                </Box>
        </>
    )
}