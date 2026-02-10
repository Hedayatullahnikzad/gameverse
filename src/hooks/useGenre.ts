import useGenres from "./useGenres";
import type { Genre } from "./useGenres";

const useGenre = (genreId?: number) => {
  const { data } = useGenres();

  const genres = data?.results ?? [];

  return genres.find((genre) => genre.id === genreId);
};

export default useGenre;
