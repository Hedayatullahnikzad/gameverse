import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
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
