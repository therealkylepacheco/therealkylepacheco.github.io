import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { colors } from '../theme';

const useStyles = makeStyles({
  title: {
      color: colors.primary,
      marginTop: 25,
  },
});

export type SectionTitleProps = {
    title: string
}

export const SectionTitle = (props: SectionTitleProps) => {
    const { title } = { ...props };
    const classes = useStyles();
    
    return (<Typography className={classes.title} variant='h4'>{title}</Typography>)
}