import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const GameLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GameLayout;
