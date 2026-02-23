import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import type { Trailer } from "../entities/Trailer";

const apiClient = new ApiClient<Trailer>("/games");

const useGameTrailers = (gameId: number) =>
  useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () =>
      apiClient
        .getAll({}) // dummy params if needed
        .then(() => new ApiClient<Trailer>(`/games/${gameId}/movies`).getAll())
        .then(res => res.results), // ✅ extract results
    enabled: !!gameId,
  });

export default useGameTrailers;