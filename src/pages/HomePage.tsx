import { useOutletContext } from "react-router-dom";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import type { GameQuery } from "./Layout";

interface ContextType {
  gameQuery: GameQuery;
  setGameQuery: React.Dispatch<React.SetStateAction<GameQuery>>;
}

const Homepage = () => {
  const { gameQuery, setGameQuery } = useOutletContext<ContextType>();

  return (
    <div className="pl-2">
      <GameHeading gameQuery={gameQuery} />

      <div className="flex gap-5 mb-5">
        <PlatformSelector
          selectedPlatformId={gameQuery.platformId}
          onSelectPlatform={(platform) =>
            setGameQuery((prev) => ({
              ...prev,
              platformId: platform.id,
              platformName: platform.name,
            }))
          }
        />

        <SortSelector
          sortOrder={gameQuery.sortOrder}
          onSelectSortOrder={(sortOrder) =>
            setGameQuery((prev) => ({ ...prev, sortOrder }))
          }
        />
      </div>

      <GameGrid gameQuery={gameQuery} />
    </div>
  );
};

export default Homepage;
