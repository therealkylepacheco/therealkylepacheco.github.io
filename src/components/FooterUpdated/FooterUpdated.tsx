import { Box } from "@material-ui/core";
import React from "react";
import { ContactButtonUpdated } from "../ContactButtonUpdated";
import { GitHub, LinkedIn } from "@material-ui/icons";
import { GITHUB_URL, LINKEDIN_URL } from "../../constants";

export const FooterUpdated = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      style={{ position: "sticky", bottom: "0px" }}
    >
      <ContactButtonUpdated color="primary" url={LINKEDIN_URL}>
        <LinkedIn style={{ fontSize: 75 }} />
      </ContactButtonUpdated>
      <ContactButtonUpdated color="primary" url={GITHUB_URL}>
        <GitHub style={{ fontSize: 75 }} />
      </ContactButtonUpdated>
    </Box>
  );
};
