import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Switch
      checked={darkMode}
      onChange={setDarkMode}
      className="mb-5 p-2 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer transition-all"
    >
      {darkMode ? "🌙" : "☀️"}
    </Switch>
  );
}
