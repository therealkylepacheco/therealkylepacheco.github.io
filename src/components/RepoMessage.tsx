import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';
import { colors } from '../theme';

const useStyles = makeStyles({
  message: {
      color: colors.primary,
  },
  link: {
    color: colors.secondary,
    textDecoration: 'none',
  },
});

export type RepoMessageProps = {
    link: string;
}

export const RepoMessage = (props: RepoMessageProps) => {
    const { link } = { ...props };
    const classes = useStyles();

    return (
        <Typography variant="h4" className={classes.message}>
            Check out the repo on <a className={classes.link} rel="noreferrer" target="_blank" href={link}>Github <GitHubIcon /></a>
        </Typography>
    );
}