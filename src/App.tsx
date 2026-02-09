import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  genreName?: string; // ✅ UI only
  platformId?: number;
  sortOrder: string;
  platformName?: string; // ✅ UI only
  searchText?: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    sortOrder: "",
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr] lg:grid-cols-[200px_1fr] min-h-screen bg-white dark:bg-gray-900">
      {/* Navbar */}
      <div className="lg:col-span-2">
        <Navbar
          onSearch={(searchText) =>
            setGameQuery((prev) => ({ ...prev, searchText }))
          }
        />
      </div>

      {/* Genre list */}
      <aside className="hidden lg:block px-2">
        <GenreList
          selectedGenreId={gameQuery.genreId}
          onSelectGenre={(genre) =>
            setGameQuery((prev) => ({
              ...prev,
              genreId: genre.id,
              genreName: genre.name, // ✅ instant
            }))
          }
        />
      </aside>

      {/* Main */}
      <main>
        <div className="pl-2">
          <GameHeading gameQuery={gameQuery} />

          <div className="flex gap-5 mb-5">
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery((prev) => ({
                  ...prev,
                  platformId: platform.id,
                  platformName: platform.name, // ✅ instant
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
        </div>

        <GameGrid gameQuery={gameQuery} />
      </main>
    </div>
  );
}

export default App;
