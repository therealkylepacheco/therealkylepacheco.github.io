import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { colors } from '../theme';

const useStyles = makeStyles({
  info: {
      color: colors.greyLight,
  },
});

export type ContactButtonProps = {
    link: string;
}

export const ContactButton: React.FC<ContactButtonProps> = (props) => {
    const { children, link } = { ...props };
    const classes = useStyles();

    return (
                <IconButton className={classes.info} onClick={ () => window.open(link, "_blank")}>
                    {children}
                </IconButton>
    );
}