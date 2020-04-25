import React, { useState, createContext, useContext, useEffect } from "react";

import { languageOptions, dictionaryList } from "./index";

export const LanguageContext = createContext({
  language: languageOptions[0],
  dictionary: dictionaryList[languageOptions[0].id],
});

export function LanguageProvider(props) {
  const initialState = () => {
    const myLanguage = localStorage.getItem("myLanguage");
    const obj = JSON.parse(myLanguage);
    return obj || languageOptions[0];
  };
  const initialDictionary = () => {
    const myLanguage = localStorage.getItem("myLanguage");
    const obj = JSON.parse(myLanguage) || { id: "english" };
    return dictionaryList[obj.id];
  };

  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(initialState);
  const [dictionary, setDictionary] = useState(initialDictionary);

  useEffect(() => {
    const LanguageXd = JSON.stringify(language);
    localStorage.setItem("myLanguage", LanguageXd);
  }, [language]);

  const provider = {
    language,
    dictionary,
    setLanguage: (selectedLanguage) => {
      setLanguage(selectedLanguage);
      setDictionary(dictionaryList[selectedLanguage.id]);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export function Text(props) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[props.tid];
}
