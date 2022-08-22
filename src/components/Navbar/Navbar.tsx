import Typography from "@material-ui/core/Typography";
import React from "react";
import MenuButton from "../MenuButton";
import MenuOption from "../MenuOption";
import { AppBarStyled, NavbarButton, NavbarContainer } from "./Navbar.styles";
import { useNavbar } from "./useNavbar";

type NavbarOption = {
  title: string;
  route: string;
  subRoutes?: NavbarOption[];
};

export type NavbarProps = {
  options: NavbarOption[];
};

export const Navbar = (props: NavbarProps) => {
  const { options } = { ...props };

  const { routeTo } = useNavbar();

  return (
    <AppBarStyled>
      <NavbarContainer>
        {options.map((option) => {
          if (option.subRoutes) {
            return (
              <MenuButton title={option.title}>
                {option.subRoutes.map((sub) => {
                  let route = `${option.route}${sub.route}`;
                  return (
                    <MenuOption key={route} title={sub.title} route={route} />
                  );
                })}
              </MenuButton>
            );
          } else {
            return (
              <NavbarButton
                key={option.route}
                onClick={() => routeTo(option.route)}
              >
                <Typography variant="h6">{option.title}</Typography>
              </NavbarButton>
            );
          }
        })}
      </NavbarContainer>
    </AppBarStyled>
  );
};
