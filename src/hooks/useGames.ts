import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import type { GameQuery } from "../App";
import type { FetchResponse } from "../services/api-client";

/* ======================
   Types (local to hook)
====================== */

export  interface Platform {
  id: number;
  name: string;
  slug: string;
}

export  interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}


const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then(res => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

export default useGames;
