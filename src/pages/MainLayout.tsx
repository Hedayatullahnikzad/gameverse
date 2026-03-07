import Navbar from "../components/Navbar";
import GenreList from "../components/GenreList";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isGameDetailsPage = location.pathname.startsWith("/games/");

  return (
    <div
      className={
        isGameDetailsPage
          ? "min-h-screen bg-white dark:bg-gray-900"
          : "grid grid-rows-[auto_1fr] lg:grid-cols-[280px_1fr] min-h-screen bg-white dark:bg-gray-900"
      }
    >
      <div className={!isGameDetailsPage ? "lg:col-span-2" : ""}>
        <Navbar />
      </div>

      {!isGameDetailsPage && (
        <aside className="hidden lg:block px-10">
          <GenreList />
        </aside>
      )}

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
