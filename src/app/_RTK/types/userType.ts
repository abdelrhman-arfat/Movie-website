export type TUser = {
  id?: number;
  include_adult?: boolean;
  name?: string;
  iso_639_1?: string;
  iso_3166_1?: string;
  username?: string;
  avatar?: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: string | null;
    };
  };
};
