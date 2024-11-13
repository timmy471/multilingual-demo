import DarkModeToggle from "./DarkModeToggle";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  return (
    <header className="container flex justify-between">
      <DarkModeToggle />
      <LanguageSelector />
    </header>
  );
};

export default Header;
