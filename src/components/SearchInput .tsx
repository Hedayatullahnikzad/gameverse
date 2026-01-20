// interface Props {
//   onSearch: (searchText: string) => void;
// }

import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="w-full ml-1"
    >
      {/* 🔹 InputGroup equivalent */}
      <div className="relative w-full">
        {/* 🔍 Icon (InputLeftElement equivalent) */}
        <span
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-500
            dark:text-gray-400
            pointer-events-none
          "
        >
          <BsSearch />
        </span>

        {/* 🔎 Input */}
        <input
          name="search"
          type="text"
          placeholder="Search games..."
          className="
            w-full
            rounded-full
            pl-12
            pr-4
            py-3
            bg-gray-100
            dark:bg-gray-700
            dark:text-white
            placeholder-gray-500
            dark:placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
      </div>
    </form>
  );
};

export default SearchInput;
