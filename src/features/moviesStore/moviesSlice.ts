{
  /*
    !!!!!!!!! DISCLAIMER
    UNTIL I'V FINISHED THE APP, THEN I DISCOVERED 
    THE HYDRATE WAY TO CREATE STORE IN SERVER SIDE
    AND SYNC IT WITH THE CLIENT 
  */
}

// import { AnyAction } from "redux";
// import { HYDRATE } from "next-redux-wrapper";

// export interface State {
//   app: string;
//   page: string;
// }

// export const reducer = (
//   state: State = { app: "init", page: "init" },
//   action: AnyAction
// ) => {
//   switch (action.type) {
//     case HYDRATE:
//       if (action.payload.app === "init") delete action.payload.app;
//       if (action.payload.page === "init") delete action.payload.page;
//       return { ...state, ...action.payload };
//     case "APP":
//       return { ...state, app: action.payload };
//     case "PAGE":
//       return { ...state, page: action.payload };
//     default:
//       return state;
//   }
// };

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../../app/store";

type MoviesType = {
  id: number;
  title: string;
  year: number;
  rating: number;
  description: string;
  cover: string;
  categories: string[];
  video: string;
};

type ValueType = {
  movies: MoviesType[];
  filteredMovies: MoviesType[];
};

type SelectType = {
  type: string;
  value: any;
};

export interface MoviesState {
  value: ValueType;
}

const initialState: MoviesState = {
  value: {
    movies: [],
    filteredMovies: [],
  },
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,

  // generating associated actions to the reducer field
  reducers: {
    addMoviesData: (state, action: PayloadAction<MoviesType[] | any>) => {
      // add initial data to store
      state.value.movies = action.payload;
      state.value.filteredMovies = action.payload;
    },

    // handling filters
    addFilteredMovies: (state, action: any) => {
      const searchBy = action.payload.value;

      // in case search bar is empty we return the whole movies
      if (!searchBy || searchBy.length == 0) {
        state.value.filteredMovies = state.value.movies;
      } else {
        state.value.filteredMovies = state.value.filteredMovies.filter(
          (movie) => {
            return movie.title
              .toLocaleLowerCase()
              .includes(searchBy.toLocaleLowerCase());
          }
        );
      }
    },

    // handling select
    filterSelectMovies: (state, action: PayloadAction<SelectType>) => {
      const filterBy = action.payload.value;
      if (filterBy.rating) {
        state.value.filteredMovies = state.value.filteredMovies.filter(
          (movie) => {
            return movie.rating == filterBy.rating;
          }
        );
      }
    },

    // handling filterBy Year
    filterMoviesByYear: (state, action: PayloadAction<SelectType>) => {
      const filterBy = action.payload.value;
      if (filterBy.year) {
        state.value.filteredMovies = state.value.filteredMovies.filter(
          (movie) => {
            return movie.year == filterBy.year;
          }
        );
      }
    },

    // handling filterBy categories
    filterMoviesByCategory: (state, action: PayloadAction<SelectType>) => {
      console.log("filterByYear", action.payload.value);
      const filterBy = action.payload.value;
      if (filterBy.category) {
        state.value.filteredMovies = state.value.filteredMovies.filter(
          (movie) => {
            return movie.categories.includes(filterBy.category);
          }
        );
      }
    },
  },
});

export const {
  addMoviesData,
  addFilteredMovies,
  filterSelectMovies,
  filterMoviesByYear,
  filterMoviesByCategory,
} = moviesSlice.actions;

export const selectMovies = (state: AppState) => state.moviesData.value;

export default moviesSlice.reducer;
