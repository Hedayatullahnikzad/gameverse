import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import { ApiClient, type FetchResponse } from "../services/api-client";
import type { Genre } from "../entities/Genre";


const genreApiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: genreApiClient.getAll,
    staleTime: ms("24h"),
  placeholderData: (previousData) =>
  previousData ?? {
    count: genres.length,
    results: genres,

  },

  });

export default useGenres;
