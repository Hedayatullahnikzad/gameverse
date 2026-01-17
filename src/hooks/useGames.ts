import type { GameQuery } from "../App";
import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        // 🎯 filter games by genre (if selected)
        genres: gameQuery.genre?.id,

        // 🎯 filter games by PARENT platform (PC / PlayStation / Xbox)
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
      },
    },
    [
     gameQuery
    ]
  );
};

export default useGames;
