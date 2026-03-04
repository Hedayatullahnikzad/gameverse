import useGenres from "../hooks/useGenres";
import { useGameQueryStore } from "../store/useGameQueryStore";
import getCroppedImageUrl from "../services/image-url";
import genres from "../data/genres";

const GenreList = () => {
  const { data } = useGenres();

  // ✅ Subscribe only to what we need
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);

  const setGenre = useGameQueryStore((state) => state.setGenre);

  const genreList = data?.results ?? genres;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
        Genres
      </h2>

      <ul>
        {genreList.map((genre) => (
          <li key={genre.id} className="py-[5px]">
            <div className="flex items-center gap-3">
              <img
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                className="w-8 h-8 rounded-lg object-cover"
              />

              <button
                onClick={() => setGenre(genre.id, genre.name)}
                className={`
    w-full
    text-left
    text-lg
    leading-tight
    break-words
    bg-transparent
    hover:underline
    ${
      genreId === genre.id
        ? "font-bold text-blue-600"
        : "text-gray-700 dark:text-gray-300"
    }
  `}
              >
                {genre.name}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
