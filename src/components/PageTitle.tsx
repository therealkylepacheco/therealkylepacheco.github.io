import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { colors } from '../theme';

const useStyles = makeStyles({
  title: {
      color: colors.primary,
      marginTop: 15
  },
});

export type PageTitleProps = {
    text: string;
}

export const PageTitle = (props: PageTitleProps) => {
    const { text } = { ...props };
    const classes = useStyles();
    
    return (
                <Typography variant="h2" className={classes.title}>
                    {text}
                </Typography>
    )
}