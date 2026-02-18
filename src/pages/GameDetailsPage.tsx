import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
  const { slug } = useParams();

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Invalid game URL.
      </div>
    );
  }

  const { data: game, isLoading, error } = useGame(slug);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load game.
      </div>
    );

  if (!game) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{game.name}</h1>

        <img
          src={game.background_image}
          alt={game.name}
          className="rounded-xl mb-6 w-full"
        />

        <p className="text-lg leading-relaxed">{game.description_raw}</p>
      </div>
    </div>
  );
};

export default GameDetailsPage;
