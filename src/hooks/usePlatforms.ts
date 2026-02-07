// src/hooks/usePlatforms.ts
import { useQuery } from "@tanstack/react-query";
import platformService from "../services/platformService";
import platforms from "../data/platform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    initialData: {
      results: platforms,
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default usePlatforms;
