import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div className="grid grid-cols-[300px_1fr] grid-rows-[auto_1fr] bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="col-span-2">
        <Navbar />
      </div>
      <div className="hidden lg:block">Aside</div>
      <div className="col-span-full lg:col-span-1 lg:col-start-2">
        <GameGrid />
      </div>
    </div>
  );
}

export default App;
