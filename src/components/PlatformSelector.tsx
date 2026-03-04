import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { useGameQueryStore } from "../store/useGameQueryStore";

const PlatformSelector = () => {
  const [open, setOpen] = useState(false);
  const { data } = usePlatforms();

  // ✅ Subscribe only to what we need
  const platformName = useGameQueryStore(
    (state) => state.gameQuery.platformName,
  );

  const setPlatform = useGameQueryStore((state) => state.setPlatform);

  const platforms = data?.results ?? [];

  return (
    <div className="relative inline-block text-left w-full sm:w-auto">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-2
          rounded-md
          border
          border-gray-300
          px-3
          py-2
          text-xs
          font-medium
          text-gray-900
          bg-white
          hover:bg-gray-100
          dark:border-gray-600
          dark:text-white
          dark:bg-gray-800
          dark:hover:bg-gray-700
          sm:px-4
          sm:text-sm
        "
      >
        <span>{platformName ?? "Platform"}</span>
        <BsChevronDown className="shrink-0 text-gray-500 dark:text-gray-300" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            left-0
            z-10
            mt-2
            w-full
            sm:w-56
            rounded-md
            border
            border-gray-200
            bg-white
            shadow-lg
            dark:border-gray-700
            dark:bg-gray-800
          "
        >
          <ul className="py-1">
            {platforms.map((platform) => (
              <li
                key={platform.id}
                onClick={() => {
                  setPlatform(platform.id, platform.name);
                  setOpen(false);
                }}
                className="
                  cursor-pointer
                  px-4
                  py-2
                  text-sm
                  text-gray-900
                  dark:text-gray-200
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                {platform.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
