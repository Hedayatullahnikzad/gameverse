import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import type { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    enabled: !!slug,
  });

export default useGame;
