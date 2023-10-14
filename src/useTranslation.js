import { useCallback, useState, useEffect } from "react";

export function useTranslation(defaultLanguage) {
  let [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);
  let [translation, setTranslation] = useState({});
  let getTranslated = useCallback(
    (key) => {
      return translation[key];
    },
    [translation]
  );

  useEffect(() => {
    import("./languages/" + currentLanguage + ".json").then((content) => {
      setTranslation(content);
    });
  }, [currentLanguage]);

  return [currentLanguage, setCurrentLanguage, getTranslated];
}
