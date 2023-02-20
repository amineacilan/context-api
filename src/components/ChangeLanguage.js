import React, { useContext } from "react";
import LangContext from "../contexts/LanguageContext";

function ChangeLanguage() {
  const {lang,setLang} = useContext(LangContext);
  return (
    <div>
    <hr/>
      Aktif Dil:{lang}
      <div>
        <button onClick={()=>{setLang("tr")}}>TR</button>
        <button onClick={()=>{setLang("en")}}>ENG</button>
        <button onClick={()=>{setLang("deu")}}>DEU</button>
      </div>
    </div>
  );
}

export default ChangeLanguage;
