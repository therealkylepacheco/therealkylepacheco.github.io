import React from "react";
import Content from "../components/Content";
import PageTitle from "../components/PageTitle";
import ResponsiveContent from "../components/ResponsiveContent";
import me from "../images/me.png";

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
      </ResponsiveContent>
    </>
  );
};
