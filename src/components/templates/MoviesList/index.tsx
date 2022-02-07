import React, { useEffect, useState } from "react";
import {
  Container
} from "../../templates/Layout/styles";
import theme from "../../../theme/config";
import List from "../../templates/List";
import MovieCard from "../../atoms/MovieCard";
import Title from "../../atoms/Title";
import { useAppSelector } from "../../../app/hooks";
import { selectMovies } from "../../../features/moviesStore/moviesSlice";

interface MovieListProps {
  title: string;
  isTopEight?: boolean;
}

const index: React.FC<MovieListProps> = ({ title, isTopEight }) => {
  const moviesData = useAppSelector(selectMovies);

  const [movies, setMovies] = useState(moviesData.filteredMovies);

  const handleTopEight = (movies) => {
    let top8 = movies
      .slice()
      .sort(function (a: any, b: any) {
        return b.rating - a.rating;
      })
      .slice(0, 8);

    return top8;
  };

  useEffect(() => {
    if (isTopEight) {
      setMovies(handleTopEight(moviesData?.movies));
    } else {
      setMovies(moviesData.filteredMovies);
    }
  }, [moviesData]);

  return (
    <div>
      
      <Container padding="1rem 2rem">
        <Title lgAlignement={"center"} color={theme.colors.white[100]} size={theme.fonts.size.xl6}>
          {title}
        </Title>
      </Container>

      <Container padding="0 2rem">
        <List>
          {movies.length > 0 ? (
            movies.map((item) => {
              return (
                <MovieCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  year={item.year}
                  rating={item.rating}
                  cover={item.cover}
                  description={item.description}
                />
              );
            })
          ) : (
            <Title>
              🥺 it looks like the Movie you're looking for was not found
            </Title>
          )}
        </List>
      </Container>
    </div>
  );
};

export default index;
