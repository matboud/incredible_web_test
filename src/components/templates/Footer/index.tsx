import React from "react";
import { Container } from "../Layout/styles";
import Title from "../../atoms/Title";

const index = () => {
  return (
    <Container flex justifyCenter padding={"0 4rem"}>
      <Title>
        MADE WITH LOT OF &nbsp; ❤️ &nbsp; and &nbsp; ☕️ &nbsp; by
        &#60;Matboud&#62;;
      </Title>
    </Container>
  );
};

export default index;
