import { useTranslation } from "./useTranslation";
import "./styles.css";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  let [language, setLanguage, getTranslated] = useTranslation("pt");

  return (
    <div className="App">
      <h1>Current Language: {language}</h1>
      <h1>{getTranslated("hello_cs")}</h1>
      <h2>{getTranslated("start_editing_to_see_some_magic_happen")}</h2>
      <button
        onClick={() =>
          setLanguage(language === "pt" ? "en" : language == "en" ? "it" : "pt")
        }
      >
        MUDAR
      </button>
    </div>
  );
}
