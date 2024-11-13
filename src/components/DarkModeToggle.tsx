import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on first load
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return darkMode ? (
    <SunIcon
      className="w-6 h-6 text-yellow-500 "
      role="button"
      onClick={toggleDarkMode}
    />
  ) : (
    <MoonIcon
      className="w-6 h-6 text-gray-900 "
      role="button"
      onClick={toggleDarkMode}
    />
  );
}

export default DarkModeToggle;
