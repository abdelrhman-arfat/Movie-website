export type TMoviesList = {
  data: {
    success: boolean;
    genres: { name: string; id: number }[];
  };
};
