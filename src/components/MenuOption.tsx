import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router-dom";
import { colors } from "../theme";

const useStyles = makeStyles({
  menuOption: {
    color: colors.white,
  },
});

export type MenuOptionProps = {
  title: string;
  route: string;
};

export const MenuOption = (props: MenuOptionProps) => {
  const { title, route } = { ...props };
  const classes = useStyles();
  const history = useHistory();

  const routeTo = (route: string) => {
    history.push(route);
  };

  return (
    <MenuItem
      key={route}
      className={classes.menuOption}
      onClick={() => {
        routeTo(route);
      }}
    >
      <Typography variant="h6">{title}</Typography>
    </MenuItem>
  );
};
