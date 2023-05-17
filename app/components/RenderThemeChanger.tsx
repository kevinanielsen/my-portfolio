"use client"

import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const RenderThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  if (currentTheme === "dark") {
    return (
      <button onClick={() => setTheme("light")}>
        <BiSun size="1.25em" />
      </button>
    );
  } else {
    return (
      <button onClick={() => setTheme("dark")}>
        <BiMoon size="1.25em" />
      </button>
    );
  }
};

export default RenderThemeChanger;
