import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <div>
      {/* 🔥 Header Section */}
      <div className="flex flex-col gap-6 mb-10">
        {/* Title */}
        <GameHeading />

        {/* Controls */}
        <div className="flex items-center gap-4">
          <PlatformSelector />
          <SortSelector />
        </div>
      </div>

      {/* Games Grid */}
      <GameGrid />
    </div>
  );
};

export default HomePage;
