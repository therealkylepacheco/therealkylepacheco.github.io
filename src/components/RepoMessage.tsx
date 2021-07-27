import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { colors } from '../theme';
import { SectionTitle } from './SectionTitle';

const useStyles = makeStyles({
  message: {
      color: colors.primary,
  },
});

export type RepoMessageProps = {
    link: string;
}

export const RepoMessage = (props: RepoMessageProps) => {
    const { link } = { ...props };
    const classes = useStyles();

    return (
        <Typography variant="h4" className={classes.message}>Check out the repo on <a rel="noreferrer" target="_blank" href={link}>Github</a></Typography>
    );
}