import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { colors } from '../theme';

const TEXT_WIDTH = 450;
const IMAGE_WIDTH = 350;
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

export type PageContentProps = {
    title: string;
    body: string;
    img?: string;
    alt?: string;
    imgPosition?: 'left' | 'right';
};

const defaultProps: Partial<PageContentProps> = {
    imgPosition: 'right',
};

export const PageContent = (props: PageContentProps) => {
    const { title, body, img, alt, imgPosition } = { ...defaultProps, ...props };
    const classes = useStyles();


    return (
        <Grid item container justifyContent="flex-start" alignItems="center">
            {(img && imgPosition === 'left') && <Grid item sm={12} md={6} lg={6} xl={6}><img src={img} alt={alt} className={classes.image}/></Grid>}
            <Grid item sm={12} md={3} lg={4} xl={4}>
                <Box>
                    <Typography className={classes.title} variant='h5'>{title}</Typography>
                    <Typography className={classes.body} variant="body1">{body}</Typography>
                </Box>
            </Grid>
            {(img && imgPosition === 'right') && <Grid item sm={12} md={3} lg={7}><img src={img} alt={alt} className={classes.image}/></Grid>}
        </Grid>
    )
}