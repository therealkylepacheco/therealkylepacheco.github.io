import React from "react";
import Content from "../components/Content";
import PageTitle from "../components/PageTitle";
import ResponsiveContent from "../components/ResponsiveContent";
import me from "../images/me.png";
import Grid from "@material-ui/core/Grid";
import { InfoCard } from "../components/InfoCard/InfoCard";

export const Home = () => {
  return (
    <>
      <ResponsiveContent>
        <Content
          img={me}
          alt="Kyle Pacheco"
          imgPosition="right"
          imgRounded={true}
        >
          <PageTitle text="Kyle Pacheco" />
        </Content>
        <Grid container spacing={2} justifyContent="space-between">
          <InfoCard title="Experience" route="/experience" xs={12} sm={4} />
          <InfoCard title="Projects" route="/projects" xs={12} sm={4} />{" "}
          <InfoCard title="Skills" route="/skills" xs={12} sm={4} />
        </Grid>
        {/* KDP TODO: Add What's New? Section */}
      </ResponsiveContent>
    </>
  );
};
