import { AppBar, Grid } from "@material-ui/core";
import { NavButton } from "./NavButton";

export const Navigation = () => {
  // KDP TODO: Need mobile variant (dropdown / app bar)

  return (
    <Grid
      container
      justifyContent="center"
      style={{
        backgroundColor: "#210002",
        position: "sticky",
        top: "0px",
        zIndex: 99,
      }}
    >
      <Grid item sm={12} md={2}>
        <NavButton href="#about" text="About" />
      </Grid>
      <Grid item sm={12} md={2}>
        <NavButton href="#skills" text="Skills" />
      </Grid>
      <Grid item sm={12} md={3}>
        <NavButton href="#experience" text="Experience" />
      </Grid>
      <Grid item sm={12} md={2}>
        <NavButton href="#projects" text="Projects" />
      </Grid>
      <Grid item sm={12} md={2}>
        <NavButton href="#education" text="Education" />
      </Grid>
    </Grid>
  );
};
