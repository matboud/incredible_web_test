import React, { ReactNode } from "react";
import theme from "../../../theme/config";
import { StyledButton } from "./styles";

interface ButtonProps {
  children: ReactNode;
  background?: string;
  color?: string;
  margin?: string;
  padding?: string;
  onClick?: (e: any) => void;
}

const index: React.FC<ButtonProps> = ({
  children,
  background,
  color,
  margin,
  padding,
  onClick,
}) => {
  return (
    <StyledButton
      padding={padding || false}
      background={background || false}
      color={color || false}
      margin={margin}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default index;
