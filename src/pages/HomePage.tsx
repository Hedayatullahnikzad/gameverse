import { useOutletContext, useSearchParams } from "react-router-dom";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import type { GameQuery } from "./MainLayout";

interface ContextType {
  gameQuery: GameQuery;
  setGameQuery: React.Dispatch<React.SetStateAction<GameQuery>>;
}

const HomePage = () => {
  const { gameQuery, setGameQuery } = useOutletContext<ContextType>();
  const [searchParams] = useSearchParams();

  const searchTextFromURL = searchParams.get("search") || undefined;

  const mergedGameQuery: GameQuery = {
    ...gameQuery,
    searchText: searchTextFromURL,
  };

  return (
    <div className="pl-2">
      <GameHeading gameQuery={mergedGameQuery} />

      <div className="flex gap-5 mb-5">
        <PlatformSelector
          selectedPlatformId={mergedGameQuery.platformId}
          onSelectPlatform={(platform) =>
            setGameQuery((prev) => ({
              ...prev,
              platformId: platform.id,
              platformName: platform.name,
            }))
          }
        />

        <SortSelector
          sortOrder={mergedGameQuery.sortOrder}
          onSelectSortOrder={(sortOrder) =>
            setGameQuery((prev) => ({ ...prev, sortOrder }))
          }
        />
      </div>

      <GameGrid gameQuery={mergedGameQuery} />
    </div>
  );
};

export default HomePage;
