import React from "react";
import isuLogo from "../images/isu.png";
import nnuLogo from "../images/nnu.png";
import PageTitle from "../components/PageTitle";
import Grid from "@material-ui/core/Grid";
import { InfoCard } from "../components/InfoCard/InfoCard";

export const Education = () => {
  return (
    <>
      <PageTitle text="Education" />
      <Grid container spacing={2}>
        <InfoCard
          xs={12}
          imgLink="https://www.nnu.edu"
          title="Northwest Nazarene University, BS Computer Science"
          img={nnuLogo}
          alt="NNU"
          body="I attended NNU and earned my BS in Computer Science over the course of 2.5 years. During my time here, I served as the Computer Club Treasurer and IEEE Chapter secretary. I graduated in December 2019 Magna Cum Laude."
        />
        <InfoCard
          xs={12}
          imgLink="https://www.isu.edu"
          title="Idaho State University, AA General Studies"
          img={isuLogo}
          alt="ISU"
          body="I earned my associate's degree concurrently in high school. This allowed me to complete my gen ed requirements rapidly and graduate ahead of schedule."
        />
      </Grid>
    </>
  );
};
