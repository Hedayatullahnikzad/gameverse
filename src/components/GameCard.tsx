import type { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      {/* Image */}
      <img
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      {/* Card body */}
      <div className="p-4 space-y-2">
        {/* Platforms + Critic Score */}
        <div className="flex items-center justify-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>

        {/* Game title */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </h2>
      </div>
    </>
  );
};

export default GameCard;
