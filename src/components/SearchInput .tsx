import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGameQueryStore } from "../store/useGameQueryStore";

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const resetAndSearch = useGameQueryStore((state) => state.resetAndSearch);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (!searchRef.current) return;

        const searchText = searchRef.current.value.trim();
        if (!searchText) return;

        // 🔥 1. Update Zustand
        resetAndSearch(searchText);

        // 🔥 2. Navigate to HomePage
        navigate("/");
      }}
      className="w-full ml-1"
    >
      <div className="relative w-full">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
          <BsSearch />
        </span>

        <input
          ref={searchRef}
          type="text"
          placeholder="Search games..."
          className="w-full rounded-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-700 dark:text-white"
        />
      </div>
    </form>
  );
};

export default SearchInput;
