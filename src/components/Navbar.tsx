import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput ";
interface Props {
  onSearch?: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <div className="w-full dark:bg-gray-900 py-2">
      <div className="flex items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-[48px] h-[48px] flex-shrink-0"
        />

        {/* Search input (NO margin, NO gap) */}
        <div className="flex-1">
          <SearchInput onSearch={onSearch ?? (() => {})} />
        </div>

        <div className="mr-2 ml-2">
          <ColorModeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
