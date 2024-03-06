import { Box } from "@material-ui/core";
import React, { useContext } from "react";
import { ContactButtonUpdated } from "../ContactButtonUpdated";
import { GitHub, LinkedIn } from "@material-ui/icons";
import { GITHUB_URL, LINKEDIN_URL } from "../../constants";
import { AppContext } from "../../AppContext";

export const FooterUpdated = () => {
  const { isMobile } = useContext(AppContext);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      style={{ position: "sticky", bottom: "0px" }}
    >
      <ContactButtonUpdated color="primary" url={LINKEDIN_URL}>
        <LinkedIn style={{ fontSize: isMobile ? 50 : 75 }} />
      </ContactButtonUpdated>
      <ContactButtonUpdated color="primary" url={GITHUB_URL}>
        <GitHub style={{ fontSize: isMobile ? 50 : 75 }} />
      </ContactButtonUpdated>
    </Box>
  );
};
