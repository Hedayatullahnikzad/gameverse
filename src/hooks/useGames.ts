import { useQuery } from "@tanstack/react-query";
import { ApiClient, type FetchResponse } from "../services/api-client";
import type { GameQuery } from "../App";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const gamesApiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      gamesApiClient.getAll({
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      }),
    staleTime: 1000 * 60 * 5,

  });

export default useGames;
