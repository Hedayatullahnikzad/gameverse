import { useSearchParams } from "react-router-dom";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import { useGameQueryStore } from "../store/useGameQueryStore";
import { useEffect } from "react";

const HomePage = () => {
  const { setSearchText } = useGameQueryStore();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchTextFromURL = searchParams.get("search") || undefined;
    setSearchText(searchTextFromURL);
  }, [searchParams, setSearchText]);

  return (
    <div className="pl-2">
      <GameHeading />

      <div className="flex gap-5 mb-5">
        <PlatformSelector />
        <SortSelector />
      </div>

      <GameGrid />
    </div>
  );
};

export default HomePage;
