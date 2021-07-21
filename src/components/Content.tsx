import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { colors } from '../theme';

const TEXT_WIDTH = 450;
const IMAGE_WIDTH = 315;
const IMAGE_HEIGHT = 280;

const useStyles = makeStyles({
  title: {
      color: colors.primary,
      maxWidth: TEXT_WIDTH,
  },
  content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
  },
  body: {
      maxWidth: TEXT_WIDTH,
  },
  image: {
      maxWidth: IMAGE_WIDTH,
      maxHeight: IMAGE_HEIGHT,
  },
});

export type ContentProps = {
    title?: string;
    body?: string;
    img?: string;
    alt?: string;
    imgPosition?: 'left' | 'right';
};

const defaultProps: Partial<ContentProps> = {
    imgPosition: 'right',
};

export const Content = (props: ContentProps) => {
    const { title, body, img, alt, imgPosition } = { ...defaultProps, ...props };
    const classes = useStyles();


    return (
        <>
            {(img && imgPosition === 'left') && <Grid item ><img src={img} alt={alt} className={classes.image}/></Grid>}
            <Grid item >
                <Box>
                    <Typography className={classes.title} variant='h5'>{title}</Typography>
                    <Typography className={classes.body} variant="body1">{body}</Typography>
                </Box>
            </Grid>
            {(img && imgPosition === 'right') && <Grid item ><img src={img} alt={alt} className={classes.image}/></Grid>}
        </>
    )



    return (
        <>
            {(img && imgPosition === 'left') && <Grid item sm={12} md={4} lg={4} xl={2}><img src={img} alt={alt} className={classes.image}/></Grid>}
            <Grid item sm={12} md={3} lg={4} xl={4}>
                <Box>
                    <Typography className={classes.title} variant='h5'>{title}</Typography>
                    <Typography className={classes.body} variant="body1">{body}</Typography>
                </Box>
            </Grid>
            {(img && imgPosition === 'right') && <Grid item sm={12} md={3} lg={7}><img src={img} alt={alt} className={classes.image}/></Grid>}
        </>
    )
}
