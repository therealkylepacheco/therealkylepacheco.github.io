import { AppBar, Drawer, Grid, IconButton } from "@material-ui/core";
import { NavButton } from "./NavButton";
import useMobilePage from "../../pages/hooks/useMobilePage";
import Menu from "@material-ui/icons/Menu";
import { useCallback, useState } from "react";

export const Navigation = () => {
  const isMobile = useMobilePage(970);

  /**
 *     <>
      <IconButton onClick={handleOpenDrawer}>
        <MenuIconStyled />
      </IconButton>
      <Drawer open={openDrawer} anchor="top" onClose={handleCloseDrawer}>
        <List disablePadding>
          {options.map((option) => (
            <ThemedListItem
              button
              disableRipple
              disableGutters
              key={option.route}
              onClick={() => handleClick(option.route)}
            >
              <Typography variant="h4">{option.title}</Typography>
            </ThemedListItem>
          ))}
          <ThemedListItem
            button
            disableRipple
            disableGutters
            onClick={handleCloseDrawer}
          >
            <ArrowUpward />
          </ThemedListItem>
        </List>
      </Drawer>
    </>
 */

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleOpenMenu = useCallback(() => setDrawerIsOpen(true), []);

  const handleCloseMenu = useCallback(() => setDrawerIsOpen(false), []);

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
      {isMobile ? (
        <>
          <IconButton style={{ width: "100%" }} onClick={handleOpenMenu}>
            <Menu color="primary" />
          </IconButton>
          <Drawer open={drawerIsOpen} anchor="top" onClose={handleCloseMenu}>
            <Grid item sm={12}>
              <NavButton action={handleCloseMenu} href="#about" text="About" />
            </Grid>
            <Grid item sm={12}>
              <NavButton
                action={handleCloseMenu}
                href="#experience"
                text="Experience"
              />
            </Grid>
            <Grid item sm={12}>
              <NavButton
                action={handleCloseMenu}
                href="#skills"
                text="Skills"
              />
            </Grid>
            <Grid item sm={12}>
              <NavButton
                action={handleCloseMenu}
                href="#projects"
                text="Projects"
              />
            </Grid>
            <Grid item sm={12}>
              <NavButton
                action={handleCloseMenu}
                href="#education"
                text="Education"
              />
            </Grid>
          </Drawer>
        </>
      ) : (
        <>
          <Grid item sm={12} md={2}>
            <NavButton href="#about" text="About" />
          </Grid>
          <Grid item sm={12} md={3}>
            <NavButton href="#experience" text="Experience" />
          </Grid>
          <Grid item sm={12} md={2}>
            <NavButton href="#skills" text="Skills" />
          </Grid>
          <Grid item sm={12} md={2}>
            <NavButton href="#projects" text="Projects" />
          </Grid>
          <Grid item sm={12} md={2}>
            <NavButton href="#education" text="Education" />
          </Grid>
        </>
      )}
    </Grid>
  );
};
