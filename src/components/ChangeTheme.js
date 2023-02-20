import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function ChangeTheme() {
  const { theme, toggleTheme } = useTheme();
  /* console.log(data); */
  return (
    <div>
      <div> Aktif Tema:{theme}</div>
      <button onClick={toggleTheme}>ChangeTheme</button>
    </div>
  );
}

export default ChangeTheme;
