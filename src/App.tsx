import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  // ✅ shared state (lifted up)
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <Navbar />
      </div>

      {/* Aside / Genre list (hidden on mobile) */}
      <aside className="hidden lg:block px-2">
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </aside>

      {/* Main content */}
      <main>
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </main>
    </div>
  );
}

export default App;
