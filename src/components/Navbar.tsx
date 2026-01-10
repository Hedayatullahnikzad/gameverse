import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");

    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div className="flex items-center dark:bg-gray-900 justify-between">
      <img src={logo} alt="logo" className="w-[60px] h-[60px]" />
      <div className="p-2">
        <ColorModeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
