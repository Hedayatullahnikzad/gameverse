import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";
import GameScreenshots from "../components/GameScreenshots";

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
      <div className="min-h-screen flex items-center justify-center text-xl dark:text-white">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 dark:text-white">
        Failed to load game.
      </div>
    );

  if (!game) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{game.name}</h1>

        <ExpandableText text={game.description_raw} maxChars={400} />
        <GameAttributes game={game} />
        <GameTrailers gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </div>
    </div>
  );
};

export default GameDetailsPage;
