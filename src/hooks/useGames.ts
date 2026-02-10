import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import type { GameQuery } from "../App";
import { ApiClient, type FetchResponse } from "../services/api-client";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const gamesApiClient = new ApiClient<Game>("/games");
const PAGE_SIZE = 20;

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    // ✅ clean & stable query key
    queryKey: ["games", gameQuery],

    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      gamesApiClient.getAll({
        page: pageParam as number,
        page_size: PAGE_SIZE,

        // ✅ simplified filters
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      }),

    // ✅ pagination logic stays the same
    getNextPageParam: (lastPage, allPages) => {
      const fetchedItems = allPages.reduce(
        (total, page) => total + page.results.length,
        0
      );

      return fetchedItems < lastPage.count
        ? allPages.length + 1
        : undefined;
    },

    staleTime: ms('24h'),
  });

export default useGames;
