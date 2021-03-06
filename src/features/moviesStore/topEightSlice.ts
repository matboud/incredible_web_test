import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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

export interface MoviesState {
  value: ValueType;
  status: "idle" | "loading" | "failed";
}

const initialState: MoviesState = {
  value: {
    movies: [],
    filteredMovies: [],
  },
  status: "idle",
};

export const topEightSlice = createSlice({
  name: "movies",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    topEight: (state, action: PayloadAction<MoviesType[]>) => {
      // handle top 8 movies

      state.value.filteredMovies = action.payload.slice(0, 8);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder;
  },
});

export const { topEight } = topEightSlice.actions;

export const selectMovies = (state: AppState) => state.moviesData.value;

export default topEightSlice.reducer;
