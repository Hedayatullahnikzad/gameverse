import type { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800">
      {/* Image */}
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-48 object-cover"
      />

      {/* Card Body */}
      <div className="p-4 space-y-2">
        {/* Game Title */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {game.name}
        </h2>

        {/* Platforms + Critic Score */}
        <div className="flex items-center justify-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
