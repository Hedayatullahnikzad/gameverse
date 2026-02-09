import { useQuery } from "@tanstack/react-query";
import { ApiClient, type FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string | null;
}

const genreApiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: genreApiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  placeholderData: (previousData) =>
  previousData ?? {
    count: genres.length,
    results: genres,
  },

  });

export default useGenres;
