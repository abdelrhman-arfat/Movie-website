export type TMoviesList = {
  data: {
    success: boolean;
    genres: TGeners[];
  };
};
export type TGeners = { id: number; name: string };
