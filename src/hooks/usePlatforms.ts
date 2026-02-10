// src/hooks/usePlatforms.ts
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platform";
import { ApiClient, type FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const platformApiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: platformApiClient.getAll,
    initialData: {
      count: platforms.length,
      results: platforms,
    },
    staleTime: ms('24h')
    
  });

export default usePlatforms;
