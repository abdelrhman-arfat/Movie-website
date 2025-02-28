export type TPFilms = {
  id: number;
  genre_ids: number[];
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TTheMain = {
  currentData: {
    success: boolean;
    data: {
      page: number;
      total_pages: number;
      total_results: number;
      results: TPFilms[];
    };
  };
  data: {
    page: number;
    results: TPFilms[];
    total_pages: number;
    total_results: number;
  };
  endpointName: string;
  fulfilledTimeStamp: number;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isUninitialized: boolean;
  originalArgs: number;
  requestId: string;
  startedTimeStamp: number;
  status: "fulfilled" | "pending" | "rejected";
};
