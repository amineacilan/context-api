import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LangContext from "../contexts/LanguageContext";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LangContext);
  /* console.log(theme); */
  return (
    <div>
      <hr />
      Footer
      <div> Aktif Tema:{theme}</div>
      <button onClick={toggleTheme}>Temayı Değiştir</button>
      <div>Aktif Dil:{lang}</div>
    </div>
  );
}

export default Footer;
