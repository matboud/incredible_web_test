import styled from "styled-components";
import theme from "../../../theme/config";

export const StyledTitle = styled.p`
  color: ${({ color }) => (color ? color : theme.colors.black[100])};
  font-size: ${({ size }) => (size ? size : theme.fonts.size.xl)};
  text-align: left;
  padding: ${({ padding }) => (padding ? padding : "0")};
  text-shadow: ${({ theme, displayShadow }) =>
    displayShadow ? "0px 1px 6px" + theme.colors.black[500] : "none"};
  text-align: ${({ lgAlignement }) => (lgAlignement ? lgAlignement : "left")};

  @media (max-width: 768px) {
    padding: ${({ padding }) => (padding ? padding : "0")};
    font-size: ${({ theme }) => theme.fonts.size.xl2};
    text-align: ${({ alignement }) => (alignement ? alignement : "center")};
  }
`;
