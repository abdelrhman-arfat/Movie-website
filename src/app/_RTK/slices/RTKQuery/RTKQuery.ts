import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TMoviesList } from "../../types/MoviesList";
import { TTheMain } from "../../types/PopularFilmsType";
// use API routes to fetch data in the server and save the token and the main url :
export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "api",
  }),
  endpoints: (builder) => ({
    getMoviesList: builder.query<TMoviesList, void>({
      query: () => `/movies/list`,
    }),
    getTvMovies: builder.query<TMoviesList, void>({
      query: () => `/tv/list`,
    }),
    getPopularMovies: builder.query<TTheMain, number>({
      query: (page: number) => `/popular?page=${page}`,
    }),
  }),
});

export const {
  useGetMoviesListQuery,
  useGetPopularMoviesQuery,
  useGetTvMoviesQuery,
} = filmsApi;
