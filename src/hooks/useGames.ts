import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import type { GameQuery } from "../store/useGameQueryStore";
import { ApiClient, type FetchResponse } from "../services/api-client";
import type { Game } from "../entities/Game";

const gamesApiClient = new ApiClient<Game>("/games");
const PAGE_SIZE = 20;

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    // 🔥 Stable & primitive query key
    queryKey: [
      "games",
      gameQuery.searchText ?? "",
      gameQuery.genreId ?? "",
      gameQuery.platformId ?? "",
      gameQuery.sortOrder ?? "",
    ],

    initialPageParam: 1,

    queryFn: ({ pageParam = 1 }) =>
      gamesApiClient.getAll({
        page: pageParam,
        page_size: PAGE_SIZE,

        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      }),

    getNextPageParam: (lastPage, allPages) => {
      const fetchedItems = allPages.reduce(
        (total, page) => total + page.results.length,
        0
      );

      return fetchedItems < lastPage.count
        ? allPages.length + 1
        : undefined;
    },

    staleTime: ms("24h"),
  });

export default useGames;