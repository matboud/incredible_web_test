import React, { useState } from "react";
import { useRouter } from "next/router";
import { Container, ResponsiveContainer } from "../../templates/Layout/styles";
import { useDispatch } from "react-redux";
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

import {
  addFilteredMovies,
  selectMovies,
  filterSelectMovies,
} from "../../../features/moviesStore/moviesSlice";
import { useAppSelector } from "../../../app/hooks";
import {URL_handler} from "../../atoms/Shared";
import theme from "../../../theme/config";
import Button from "../../atoms/Button/index";
import Select from "../../atoms/Select/index";
import Input from "../../atoms/Input/index";


const index = () => {
  const [selectValue, setSelectValue] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  // all movies:
  const moviesData = useAppSelector(selectMovies);

  // handle rating Data
  const getRatingValues = () => {
    // none duplicated ratings
    const ratingValues = Array.from(
      new Set(moviesData?.movies.map((movie) => movie.rating))
    ).map((rating) => {
      return moviesData?.movies.find((movie) => movie.rating === rating);
    });

    // sorting by largest number
    return ratingValues.sort(({ rating: a }, { rating: b }) => b - a);
  };

  // handle year Data
  const getYearValues = () => {
    // none duplicated year
    const ratingValues = Array.from(
      new Set(moviesData?.movies.map((movie) => movie.year))
    ).map((year) => {
      return moviesData?.movies.find((movie) => movie.year === year);
    });

    // sorting by largest number
    return ratingValues.sort(({ year: a }, { year: b }) => b - a);
  };

  // handle category data
  const getCategoryValues = () => {
    // none duplicated year
    let categoryValues = [];
    moviesData?.movies.map((movie) => {
      movie.categories.map((category) => {
        if (!categoryValues.includes(category)) {
          categoryValues.push(category);
        }
      });
    });

    return categoryValues;
  };

  const handleSelectChange = (e: any, title: string) => {
    setSelectValue((prev) => [
      ...prev,
      {
        [title]: e.target.value,
      },
    ]);
  };

  const applyFilter = () => {
    let prepareURL = { type: "SELECT" };

    selectValue.map((item) => {
      prepareURL = Object.assign(prepareURL, item);
    });

    dispatch(
      filterSelectMovies({
        type: prepareURL.type,
        value: prepareURL,
      })
    );
    router.push({
      pathname: "/",
      query: prepareURL,
    });
  };

  return (
    <Container flex>
      <ResponsiveContainer padding={"0 0 2rem 0"} flexNum={1}>
        <Input
          onInput={(e: any) => {
            dispatch(
              addFilteredMovies({
                type: "KEYWORD",
                value: e.target.value,
              })
            );
            router.push({
              pathname: "/",
              query: { type: "KEYWORD", value: e.target.value },
            });
          }}
        />
      </ResponsiveContainer>

      <ResponsiveContainer flex displayFlex={true} justifyContent={"end"}>
        <Container flex>
          <Select
            onChange={handleSelectChange}
            values={getRatingValues()}
            title="rating"
          />
          <Select
            onChange={handleSelectChange}
            values={getCategoryValues()}
            title="category"
          />
          <Select
            onChange={handleSelectChange}
            values={getYearValues()}
            title="year"
          />
        </Container>
      </ResponsiveContainer>
      <Container
        flex
        displayFlex
        padding="0 0 0 0.5rem"
        justifyCenter
        mobilePadding={"2rem 0.5rem 0 0.5rem"}
      >
        <Button
          background={theme.colors.black[600]}
          color={theme.colors.yellow[500]}
          onClick={applyFilter}
        >
          Apply Filters
        </Button>
      </Container>

      {/* 
        we might block user from sharing till he filter movies,
        but what if he wanted to share the webSite 
      */}
      <Container
        flex
        displayFlex
        padding="0 0 0 0.5rem"
        justifyCenter
        mobilePadding={"2rem 0.5rem 0 0.5rem"}
        gap="0.4rem"
      >
        <FacebookShareButton
          url={URL_handler()}
          quote={`checkout this amazing movies 👌 from MOVIfy 🎬 `}
        >
          <FacebookIcon round size={37} />
        </FacebookShareButton>

        <WhatsappShareButton url="www.movify.com">
          <WhatsappIcon round size={37} />
        </WhatsappShareButton>
      </Container>
    </Container>
  );
};

export default index;
