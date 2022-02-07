import React, { ReactNode } from "react";
import { StyledTitle } from "./styles";

interface TitleProps {
  children: ReactNode;
  color?: string;
  size?: string;
  padding?: string;
  displayShadow?: boolean;
  alignement?: string;
  lgAlignement?: string;
}

const index: React.FC<TitleProps> = ({
  children,
  color,
  size,
  padding,
  displayShadow,
  alignement,
  lgAlignement,
}) => {
  return (
    <StyledTitle
      lgAlignement={lgAlignement}
      alignement={alignement}
      displayShadow={displayShadow}
      color={color}
      size={size}
      padding={padding && padding}
    >
      {children}
    </StyledTitle>
  );
};

export default index;
