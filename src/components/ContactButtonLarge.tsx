import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { colors } from '../theme';

const useStyles = makeStyles({
  info: {
      color: colors.primary,
  },
  box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
});

export type ContactButtonLargeProps = {
    link: string;
    title: string;
}

export const ContactButtonLarge: React.FC<ContactButtonLargeProps> = (props) => {
    const { children, link, title } = { ...props };
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <IconButton className={classes.info} onClick={ () => window.open(link, "_blank")}>
                {children}
            </IconButton>
            <Typography className={classes.info} variant="h4">{title}</Typography>
        </Box>
    );
}