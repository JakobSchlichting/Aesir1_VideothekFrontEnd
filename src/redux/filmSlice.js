import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { films, filmsByGenre } from "../apis/film";

export const getFilms = createAsyncThunk("film/getFilms", async () => {
  const response = await films();
  return response.data;
});

export const getFilmsByGenre = createAsyncThunk("film/getFilmsByGenre", async (genre) => {
  const response = await filmsByGenre(genre);
  return response.data;
})


const filmSlice = createSlice({
  name: "film",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getFilms.pending]: (state) => {
      state.status = "loading";
    },
    [getFilms.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.list = payload;
    },
    [getFilms.rejected]: (state) => {
      state.status = "failed";
    },
    [getFilmsByGenre.pending]: (state) => {
      state.status = "loading";
    },
    [getFilmsByGenre.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.list = payload;
    },
    [getFilmsByGenre.rejected]: (state) => {
      state.status = "failed";
    },
  },
  reducers: {
    cleanFilm: (state) => {
      state.list = [];
      state.status = null;
    },
  },
});
export default filmSlice.reducer;

export const {cleanFilm} = filmSlice.actions;
