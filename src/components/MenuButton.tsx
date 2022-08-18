import ButtonBase from "@material-ui/core/ButtonBase";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useRef, useState } from "react";
import { colors } from "../theme";

export const navbarHeight = 50;
const buttonSpacing = 15;

const useStyles = makeStyles({
  button: {
    borderRadius: 5,
    marginRight: buttonSpacing,
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: colors.secondary,
    },
  },
});

export type MenuButtonProps = {
  title: string;
};

export const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const { title, children } = { ...props };
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ButtonBase
      ref={anchor}
      key={title}
      className={classes.button}
      onClick={handleClick}
    >
      <Typography variant="h6">{title}</Typography>
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
    </ButtonBase>
  );
};
