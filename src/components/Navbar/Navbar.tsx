import Typography from "@material-ui/core/Typography";
import React from "react";
import MenuButton from "../MenuButton";
import MenuOption from "../MenuOption";
import {
  AppBarStyled,
  ImageButton,
  NavbarButton,
  NavbarContainer,
} from "./Navbar.styles";
import { useNavbar } from "./useNavbar";
import { PageType } from "../../pages/types";

export type NavbarProps = {
  options: PageType[];
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
              <MenuButton key={option.route} title={option.title}>
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
                {option.img ? (
                  <ImageButton alt="Kyle Pacheco" src={option.img} />
                ) : (
                  <Typography variant="h4">{option.title}</Typography>
                )}
              </NavbarButton>
            );
          }
        })}
      </NavbarContainer>
    </AppBarStyled>
  );
};
