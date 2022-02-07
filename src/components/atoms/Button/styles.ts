import { ElementType } from "react";
import styled from "styled-components";
import theme from "../../../theme/config";

export interface ButtonProps {
  padding?: number;
  margin?: number;
  background?: string;
  color?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  background: ${({ background }) => (background ? background : "none")};
  color: ${({ color }) => (color ? color : theme.colors.black[300])};
  border: none;
  padding: ${({ padding }) => (padding ? padding : "1rem 2rem")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  border-radius: 4px;
`;
