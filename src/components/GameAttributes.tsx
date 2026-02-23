import type { Game } from "../entities/Game";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {/* Platforms */}
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <div key={platform.id}>{platform.name}</div>
        ))}
      </DefinitionItem>

      {/* Metascore */}
      <DefinitionItem term="Metascore">
        {game.metacritic ? (
          <CriticScore score={game.metacritic} />
        ) : (
          <span className="text-gray-500">N/A</span>
        )}
      </DefinitionItem>

      {/* Genres */}
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <div key={genre.id}>{genre.name}</div>
        ))}
      </DefinitionItem>

      {/* Publishers */}
      <DefinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <div key={publisher.id}>{publisher.name}</div>
        ))}
      </DefinitionItem>
    </div>
  );
};

export default GameAttributes;
