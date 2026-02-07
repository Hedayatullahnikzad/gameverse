import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
image_background: string | null;
}

interface FetchResponse<T> {
  count: number;
  results: T[];
}


const fetchGenres = async (): Promise<FetchResponse<Genre>> => {
  const res = await apiClient.get<FetchResponse<Genre>>("/genres");
  return res.data;
};



const useGenres = () => {
  return useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {
      count: genres.length,
      results: genres,
    },
  });
};

export default useGenres;
