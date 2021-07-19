import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { colors } from '../theme';

const TEXT_WIDTH = 450;
const IMAGE_WIDTH = 350;

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
        <Box className={classes.content}>
            {(img && imgPosition === 'left') && <img src={img} alt={alt} className={classes.image}/>}
                <Box>
                    <Typography className={classes.title} variant='h5'>{title}</Typography>
                    <Typography className={classes.body} variant="body1">{body}</Typography>
                </Box>
            {(img && imgPosition === 'right') && <img src={img} alt={alt} className={classes.image}/>}
        </Box>
    )
}