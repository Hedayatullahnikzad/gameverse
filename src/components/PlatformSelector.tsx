import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const [open, setOpen] = useState(false);
  const { data, error } = usePlatforms();

  if (error) return null;

  const platforms = data?.results ?? [];

  const selectedPlatform = platforms.find(
    (platform) => platform.id === selectedPlatformId,
  );

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
          hover:bg-gray-100
          dark:border-gray-600
          dark:text-white
          dark:hover:bg-gray-700
          sm:px-4
          sm:text-sm
        "
      >
        <span>{selectedPlatform?.name ?? "Platform"}</span>
        <BsChevronDown className="shrink-0 text-gray-500" />
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
            sm:w-48
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
                  onSelectPlatform(platform);
                  setOpen(false);
                }}
                className="
                  cursor-pointer
                  px-4
                  py-2
                  text-sm
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
