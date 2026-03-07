import { Link } from "react-router-dom";
import logo from "../assets/canva-game3.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput ";

const Navbar = () => {
  return (
    <div className="w-full dark:bg-gray-900 py-2">
      <div className="flex items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[48px] h-[48px] flex-shrink-0 cursor-pointer  rounded-full "
          />
        </Link>

        {/* Search */}
        <div className="flex-1">
          <SearchInput />
        </div>

        {/* Dark Mode Toggle */}
        <div className="mr-2 ml-2">
          <ColorModeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
