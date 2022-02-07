import React from "react";
import { Container } from "../components/atoms/MovieCard/styles";
import Layout from "../components/templates/Layout";
import theme from "../theme/config";
import Title from "../components/atoms/Title";
import { Wrapper } from "../components/templates/Layout/styles";

const contact = () => {
  return (
    <>
      <Layout displayFilters={false} backgroundColor={theme.colors.black[700]}>
        <Wrapper>
          <Container height="100vh" flex justifyCenter padding="6rem">
            <Title
              size={theme.fonts.size.xl6}
              padding="10rem"
              lgAlignement="center"
            >
              Contact Page
            </Title>
          </Container>
        </Wrapper>
      </Layout>
    </>
  );
};

export default contact;
