import React, { createContext, useState, useContext } from "react";

const DarkmodeContext = createContext();

const { Provider } = DarkmodeContext;

const DarkmodeProvider = props => {

  const [darkmode, setDark] = useState(false);

  const Dark = () => {
setDark(!darkmode);
  };




  return (
    <Provider
      value={{

        darkmode,
        Dark
      }}
    >
      {props.children}
    </Provider>
  );
};

export const useDarkmode = () => {
  return useContext(DarkmodeContext);
};

export default DarkmodeProvider;
