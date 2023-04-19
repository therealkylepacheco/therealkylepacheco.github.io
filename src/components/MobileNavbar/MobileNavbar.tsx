import React from "react";
import Typography from "@material-ui/core/Typography";
import { PageType } from "../../pages/types";
import { Drawer, IconButton, List } from "@material-ui/core";
import { MenuIconStyled, ThemedListItem } from "./MobileNavbar.styles";
import { ArrowUpward } from "@material-ui/icons";
import useMobileNavbar from "./hooks/useMobileNavbar";

export type NavbarProps = {
  options: PageType[];
};

export const MobileNavbar = (props: NavbarProps) => {
  const { options } = { ...props };

  const { openDrawer, handleClick, handleOpenDrawer, handleCloseDrawer } =
    useMobileNavbar();

  return (
    <>
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
  );
};
