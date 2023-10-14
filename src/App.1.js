import { useEffect, useState } from "react";

export default function App() {
  let [language, setLanguage] = useState("en");
  let [translation, setTranslation] = useState({});

  useEffect(() => {
    import("./languages/" + language + ".json").then((value) => {
      console.log(value);
    });
  }, [language]);

  return (
    <div className="App">
      <h1>Current Language: {language}</h1>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
