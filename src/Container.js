import React, { useContext } from "react";
import ChangeLanguage from "./components/ChangeLanguage";
import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import ThemeContext from "./contexts/ThemeContext";

function Container() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme}`}>
      <ChangeTheme />
      <ChangeLanguage />
      <Footer />
    </div>
  );
}

export default Container;
