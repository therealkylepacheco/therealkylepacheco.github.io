import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { colors } from '../theme';

const useStyles = makeStyles({
  title: {
      color: colors.primary,
  },
  content: {
      display: 'flex',
      alignItems: 'center',
      //flexDirection: 'column',
  },
  image: {
      maxWidth: 350,
  },
});

export type PageContentProps = {
    title: string;
    body: string;
    img?: string;
    alt?: string;
};

export const PageContent = (props: PageContentProps) => {
    const { title, body, img, alt } = { ...props };
    const classes = useStyles();
    
    return (
        <Box className={classes.content}>
            <Box>
                <Typography className={classes.title} variant='h5'>{title}</Typography>
                <Typography variant="body1">{body}</Typography>
            </Box>
            {img && <img src={img} alt={alt} className={classes.image}/>}
        </Box>
    )
}