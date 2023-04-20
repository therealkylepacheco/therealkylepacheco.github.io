import React from "react";
import PageTitle from "../../components/PageTitle";
import RepoMessage from "../../components/RepoMessage";
import { ThemedGrid } from "../../components/ThemedGrid/ThemedGrid";
import { ThemedText } from "../../components/ThemedText/ThemedText";
import Grid from "@material-ui/core/Grid";
import { ThemedImage } from "../../components/ThemedImage/ThemedImage";
import v1 from "../../images/v1.png";

export const ThisSite = () => {
  const title = "This Site";
  const repoLink =
    "https://github.com/therealkylepacheco/therealkylepacheco.github.io";

  return (
    <ThemedGrid container spacing={5} direction="row">
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <PageTitle text={title} />
        </Grid>
        <Grid item xs={12}>
          <RepoMessage link={repoLink} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ThemedText>
          The site you're on is my own personal project. I first made this site
          in 2021. At that time, I was focused on the basics to just get things
          up an running. The project is created using Create React App with
          TypeScript, and deployed and hosted via GitHub pages.
        </ThemedText>
      </Grid>
      <ThemedImage src={v1} caption="Version 1 of the site" />
      <Grid item xs={12}>
        <ThemedText>
          For version 1, the goal was just put up a basic site that I had made,
          but was also easily iterable. I wanted something that I could come
          back to and easily improve and expand upon. The routes are registered
          from a simple array (which even allowed for subroutes). The directory
          structure is clear so the location of future components is obvious.
          All components are functional and utilize hooks so the code it highly
          readable. Material UI (MUI) is setup for styling.
        </ThemedText>
      </Grid>
      <Grid item xs={12}>
        <ThemedText>
          I was proud of what I had accomplished getting the site up, and
          planned to come back to make updates.
        </ThemedText>
      </Grid>
      <Grid item xs={12}>
        <ThemedText>
          Fast forward to 2023. The original version of the site was up for
          longer than I initially planned, so it was time for a revamp with
          version 2. Building off of the bones of version one, I was able to
          make progress quickly. I could quickly add and remove pages, and
          update components to meet my new design needs.
        </ThemedText>
      </Grid>
      <Grid item xs={12}>
        <ThemedText>
          A major emphasis of version two is styling. I improved my utilization
          of MUI, changed up the colors I was using, and even added a background
          pattern. Information is much better presented and overall more
          aesthetically appealing.
        </ThemedText>
      </Grid>
      <Grid item xs={12}>
        <ThemedText>
          I was also interested in making a mobile friendly design. The whole
          site is now mobile friendly. This is largely done using MUI Grid
          breakpoints, as well as conditional rendering based on screen size to
          determine whether or not to render a mobile version of a component,
          such as the Navbar. I highly recommend resizing the page and having a
          look!
        </ThemedText>
      </Grid>
      <Grid item xs={12}>
        <ThemedText>
          Thanks for taking a look at my site! I will make sure to post updates
          on projects I am working on here in the future.
        </ThemedText>
      </Grid>
    </ThemedGrid>
  );
};
