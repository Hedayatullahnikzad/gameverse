import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatform";
import type { Platform } from "../hooks/usePlatform";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const [open, setOpen] = useState(false);
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium
                   hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
      >
        {selectedPlatform ? selectedPlatform.name : "Platform"}
        <BsChevronDown className="text-gray-500" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg
                     dark:border-gray-700 dark:bg-gray-800"
        >
          <ul className="py-1">
            {platforms?.map((platform) => (
              <li
                key={platform.id}
                onClick={() => {
                  onSelectPlatform(platform);
                  setOpen(false);
                }}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
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
