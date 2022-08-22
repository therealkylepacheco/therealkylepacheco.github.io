import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { ContentBody, ContentImage, ContentTitle } from "./Content.styles";
import useContent from "./useContent";

export type ContentProps = {
  title?: string;
  body?: string;
  img?: string;
  alt?: string;
  link?: string;
  imgPosition?: "left" | "right";
};

const defaultProps: Partial<ContentProps> = {
  imgPosition: "right",
};

export const Content: React.FC<ContentProps> = (props) => {
  const { title, img, alt, imgPosition, link, children } = {
    ...defaultProps,
    ...props,
  };

  const handleClick = useContent(link);

  return (
    <Grid item container alignItems="center" xs={12} spacing={3}>
      {img && imgPosition === "left" && (
        <Grid item>
          <ContentImage src={img} alt={alt} onClick={handleClick} />
        </Grid>
      )}
      <Grid item>
        <Box>
          {title && <ContentTitle variant="h5">{title}</ContentTitle>}
          <ContentBody variant="body1">{children}</ContentBody>
        </Box>
      </Grid>
      {img && imgPosition === "right" && (
        <Grid item>
          <ContentImage src={img} alt={alt} onClick={handleClick} />
        </Grid>
      )}
    </Grid>
  );
};
