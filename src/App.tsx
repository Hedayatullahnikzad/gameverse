import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div
      className="
        grid
        grid-rows-[auto_1fr]
        grid-cols-1
        lg:grid-cols-[200px_1fr]
        bg-white
        dark:bg-gray-900
        text-black
        dark:text-white
        min-h-screen
      "
    >
      {/* Navbar (always full width) */}
      <div className="col-span-1 lg:col-span-2">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </div>

      {/* Aside / Genre list (hidden on mobile) */}
      <aside className="hidden lg:block px-2">
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </aside>

      {/* Main content */}
      <main>
        <div className="pl-2">
          <GameHeading gameQuery={gameQuery} />
          <div className="flex items-center gap-5 mb-5">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </div>
        </div>
        <GameGrid gameQuery={gameQuery} />
      </main>
    </div>
  );
}

export default App;
