import Navbar from "../components/Navbar";
import GenreList from "../components/GenreList";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

export interface GameQuery {
  genreId?: number;
  genreName?: string;
  platformId?: number;
  sortOrder: string;
  platformName?: string;
  searchText?: string;
}

const Layout = () => {
  const location = useLocation();
  const isGameDetailsPage = location.pathname.startsWith("/games/");

  const [gameQuery, setGameQuery] = useState<GameQuery>({
    sortOrder: "",
  });

  return (
    <div
      className={
        isGameDetailsPage
          ? "min-h-screen bg-white dark:bg-gray-900"
          : "grid grid-rows-[auto_1fr] lg:grid-cols-[200px_1fr] min-h-screen bg-white dark:bg-gray-900"
      }
    >
      {/* Navbar */}
      <div className={!isGameDetailsPage ? "lg:col-span-2" : ""}>
        <Navbar
          onSearch={(searchText) =>
            setGameQuery((prev) => ({ ...prev, searchText }))
          }
        />
      </div>

      {/* Sidebar (hidden on GameDetailsPage) */}
      {!isGameDetailsPage && (
        <aside className="hidden lg:block px-2">
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery((prev) => ({
                ...prev,
                genreId: genre.id,
                genreName: genre.name,
              }))
            }
          />
        </aside>
      )}

      {/* Main */}
      <main>
        <Outlet context={{ gameQuery, setGameQuery }} />
      </main>
    </div>
  );
};

export default Layout;
