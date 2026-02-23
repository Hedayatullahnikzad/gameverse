import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import type { Screenshot } from "../entities/Screenshot";

const useGameScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () =>
      apiClient.getAll().then(res => res.results),
    enabled: !!gameId,
  });
};

export default useGameScreenshots;