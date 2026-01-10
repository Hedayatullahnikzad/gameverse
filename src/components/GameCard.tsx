import type { Game } from "../hooks/useGames";

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
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {game.name}
        </h2>
      </div>
    </div>
  );
};

export default GameCard;
