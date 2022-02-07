import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Layout from "../components/templates/Layout";
import theme from "../theme/config";
import MoviesList from "../components/templates/MoviesList";
import { useAppDispatch } from "../app/hooks";
import {
  addMoviesData,
  addFilteredMovies,
} from "../features/moviesStore/moviesSlice";
import {
  filterSelectMovies,
  filterMoviesByYear,
  filterMoviesByCategory,
} from "../features/moviesStore/moviesSlice";

const IndexPage: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  data,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const createQuery = () => {
    let propertyName = Object.keys(router.query);
    let handleRouterName = {};
    propertyName.map((item) => {
      handleRouterName = {
        [item]: router.query[item],
      };
    });

    return handleRouterName;
  };

  useEffect(() => {
    // if data => add all data to store
    if (!data) return;

    if (!router.query.type) dispatch(addMoviesData(data));

    //dispatching input search
    if (router.query.type == "KEYWORD") {
      dispatch(
        addFilteredMovies({
          type: "KEYWORD",
          value: router.query.value,
        })
      );
    }

    // dispatching Filter By rating
    if (router.query.type == "SELECT" && router.query.rating) {
      let handleRouterName = createQuery();

      dispatch(
        filterSelectMovies({
          type: "SELECT",
          value: handleRouterName,
        })
      );
    }

    // dispatching Filter By Year
    if (router.query.type == "SELECT" && router.query.year) {
      let handleRouterName = createQuery();

      dispatch(
        filterMoviesByYear({
          type: "SELECT",
          value: handleRouterName,
        })
      );
    }

    // dispatching Filter By Category
    if (router.query.type == "SELECT" && router.query.category) {
      let handleRouterName = createQuery();

      dispatch(
        filterMoviesByCategory({
          type: "SELECT",
          value: handleRouterName,
        })
      );
    }
  }, [data]);

  return (
    <>
      <Layout displayFilters={true} backgroundColor={theme.colors.black[700]}>
        {/* all movies*/}
        <MoviesList isTopEight title={"Top 8:"} />

        {/* all movies*/}
        <MoviesList title={"All movies:"} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/movies-data");

  const { data } = await res.json();

  return { props: { data } };
};

export default IndexPage;
