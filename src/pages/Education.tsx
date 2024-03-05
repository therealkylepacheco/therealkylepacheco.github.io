import React from "react";
import isuLogo from "../images/isu.png";
import nnuLogo from "../images/nnu.png";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { PagePadding } from "../components/PagePadding/PagePadding";
import { ExpandableCard } from "../components/ExpandableCard/ExpandableCard";
import { ExperienceContent } from "../components/ExperienceContent/ExperienceContent";

export const Education = () => {
  return (
    <Grid style={PagePadding} container id="education" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h1">Education</Typography>
      </Grid>
      <ExpandableCard title="Northwest Nazarene University">
        <ExperienceContent
          image={nnuLogo}
          imageAlt="Northwest Nazarene University"
          link="https://www.nnu.edu"
          titles={["BS Computer Science"]}
        >
          I attended NNU and earned my BS in Computer Science over the course of
          2.5 years. During my time here, I served as the Computer Club
          Treasurer and IEEE Chapter secretary. I graduated in December 2019
          Magna Cum Laude.
        </ExperienceContent>
      </ExpandableCard>
      <ExpandableCard title="Idaho State University">
        <ExperienceContent
          image={isuLogo}
          imageAlt="Idaho State University"
          link="https://www.nnu.edu"
          titles={["AA General Studies"]}
        >
          I earned my associate's degree concurrently in high school. This
          allowed me to complete my gen ed requirements rapidly and graduate
          ahead of schedule.
        </ExperienceContent>
      </ExpandableCard>
    </Grid>
  );
};
