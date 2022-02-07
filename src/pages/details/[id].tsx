import React from "react";
import { Rating } from "react-simple-star-rating";

import Layout from "../../components/templates/Layout";
import { Container as StyleContainer } from "../../components/templates/Layout/styles";
import theme from "../../theme/config";
import {
  BlurBackground,
  Content,
  CoverContainer,
  CoverLink,
  Cover,
  CoverHeading,
  CoverMiddle,
  Data,
  Title,
  DateRunTimeContainer,
  VoteContainer,
  Divider,
  Overview,
  Item,
  Keywords,
  KeywordTitle,
  KeywordContent,
  KeywordSpan,
  TeaserContainer,
  TeaserTitle,
  TeaserVideo,
  IframeContainer,
  Iframe,
} from "../../components/atoms/Shared/styles";

const Details = ({ id, data }) => {
  // const movies = useAppSelector(selectMovies);
  const movies = data;

  // get current movie by id
  const currentMovie = movies.find((movie) => movie.id == id);

  return (
    <>
      <Layout backgroundColor={theme.colors.black[700]}>
        <StyleContainer padding="4rem 2rem">
          <BlurBackground imageUrl={currentMovie?.cover}></BlurBackground>
          <Content>
            <CoverContainer>
              <CoverHeading>
                <CoverLink>
                  <Cover imageUrl={currentMovie?.cover}></Cover>
                </CoverLink>
                <Data>
                  <Title>{currentMovie?.title}</Title>
                  <DateRunTimeContainer>
                    <Item>Release year: {currentMovie?.year}</Item>
                    <Divider>.</Divider>
                  </DateRunTimeContainer>
                  <VoteContainer>
                    <Item>
                      <Rating
                        readonly
                        ratingValue={currentMovie?.rating * 10}
                        size={28}
                      />
                    </Item>
                  </VoteContainer>
                  <Overview>{currentMovie?.description}</Overview>
                  <Keywords>
                    <KeywordTitle>Categories</KeywordTitle>
                    <KeywordContent>
                      {currentMovie?.categories.length > 0
                        ? currentMovie?.categories.map(
                            (category, index) =>
                              index < 15 && (
                                <KeywordSpan key={index}>
                                  {category && "#" + category}
                                </KeywordSpan>
                              )
                          )
                        : ""}
                    </KeywordContent>
                  </Keywords>
                </Data>
              </CoverHeading>
              <CoverMiddle>
                <TeaserContainer>
                  <TeaserTitle>Watch Movie</TeaserTitle>
                  <TeaserVideo>
                    <IframeContainer>
                      <Iframe
                        src={currentMovie?.video}
                        width="100%"
                        height=""
                        frameborder="none"
                        border="0"
                        allow="autoplay; fullscreen"
                      ></Iframe>
                    </IframeContainer>
                  </TeaserVideo>
                </TeaserContainer>
              </CoverMiddle>
            </CoverContainer>
          </Content>
        </StyleContainer>
      </Layout>
    </>
  );
};

export default Details;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/movies-data");
  const { data } = await res.json();

  const paths = data.map((movie) => {
    return {
      params: { id: movie.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch("http://localhost:3000/api/movies-data");
  const { data } = await res.json();

  return { props: { id, data } };
};
