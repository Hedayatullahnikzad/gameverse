import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const [open, setOpen] = useState(false);
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-rating" },
    { label: "Average rating", value: "-metacritic" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium
                   hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
      >
        Order by: {currentSortOrder?.label || "Relevance"}
        <BsChevronDown />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg
                        dark:border-gray-700 dark:bg-gray-800"
        >
          <ul className="py-1">
            {sortOrders.map((order) => (
              <li
                key={order.label}
                onClick={() => {
                  // ✅ EXACTLY like your screenshot
                  onSelectSortOrder(order.value);
                  setOpen(false);
                }}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {order.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortSelector;
