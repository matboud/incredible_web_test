import React from "react";
import { Container, Children } from "./styles";

const index = ({ children }) => {
  return (
    <Container>
      <Children>{children}</Children>
    </Container>
  );
};

export default index;
