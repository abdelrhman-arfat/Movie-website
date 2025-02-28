export type TUser = {
  id?: number;
  include_adult?: boolean;
  name?: string;
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
