import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import genres from "../data/genres"; // ✅ fallback

interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, isFetching } = useGenres();

  // ✅ ALWAYS have genres
  const genreList = data?.results ?? genres;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
        Genres
      </h2>

      {/* Optional background indicator */}
      {isFetching && (
        <div className="text-xs text-gray-400 mb-2">Updating…</div>
      )}

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
                type="button"
                onClick={() => onSelectGenre(genre)}
                className={`text-lg bg-transparent p-0 text-left hover:underline
                  ${
                    selectedGenreId === genre.id
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
