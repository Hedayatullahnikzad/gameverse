import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import type { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) {
    return (
      <div className="flex justify-center py-4">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600 dark:border-gray-600 dark:border-t-gray-300" />
      </div>
    );
  }

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id} className="py-[5px]">
          <div className="flex items-center gap-3">
            {/* Genre image */}
            <img
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              className="w-8 h-8 rounded-lg object-cover"
            />

            {/* Genre button */}
            <button
              type="button"
              onClick={() => onSelectGenre(genre)}
              className={`text-lg bg-transparent p-0 text-left hover:underline
            ${
              selectedGenre?.id === genre.id
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
  );
};

export default GenreList;
