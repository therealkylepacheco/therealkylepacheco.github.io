import React from "react";
import Typography from "@material-ui/core/Typography";
import { MenuButtonBase } from "./MenuButton.styles";
import { useMenuButton } from "./useMenuButton";
import { makeStyles, Menu } from "@material-ui/core";
import { colors } from "../../theme";
import MenuIcon from "@material-ui/icons/Menu";

// TODO: Convert to styled component
const useStyles = makeStyles({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: colors.primary,
    },
  },
});

export type MenuButtonProps = {
  title?: string;
  icon?: boolean;
};

export const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const { title, icon, children } = { ...props };

  const { anchor, open, handleClick } = useMenuButton();

  const classes = useStyles();

  return (
    <MenuButtonBase ref={anchor} key={title} onClick={handleClick}>
      {title ? <Typography variant="h4">{title}</Typography> : null}
      {icon ? <MenuIcon /> : null}
      <Menu
        className={classes.menu}
        id={`${title}-menu`}
        anchorEl={anchor.current}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
      >
        {children}
      </Menu>
    </MenuButtonBase>
  );
};
