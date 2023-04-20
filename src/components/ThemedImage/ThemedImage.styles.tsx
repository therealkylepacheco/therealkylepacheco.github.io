import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../theme";

export const Image = styled.img<{
  imgRounded?: boolean;
}>`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.imgRounded ? "50%" : "0%")};
`;

export const Blurb = styled(Typography)`
  color: ${colors.secondary};
`;
