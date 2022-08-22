import Typography from "@material-ui/core/Typography";
import React from "react";
import { MenuItemStyled } from "./MenuOption.styles";
import { useMenuOption } from "./useMenuOption";

export type MenuOptionProps = {
  title: string;
  route: string;
};

export const MenuOption = (props: MenuOptionProps) => {
  const { title, route } = { ...props };
  const { routeTo } = useMenuOption();

  return (
    <MenuItemStyled
      key={route}
      onClick={() => {
        routeTo(route);
      }}
    >
      <Typography variant="h6">{title}</Typography>
    </MenuItemStyled>
  );
};
