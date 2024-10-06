import React, { useState, createContext } from "react";

const IdolContext = createContext();

function IdolProvider({ children }) {
  const [idolList, setIdolList] = useState([]);
  const [idolId, setIdolId] = useState({
    id: "",
    title: "",
    author: "",
    description: "",
  });

  return (
    <IdolContext.Provider value={{ idolList, setIdolList, idolId, setIdolId }}>
      {children}
    </IdolContext.Provider>
  );
}

export { IdolContext, IdolProvider };
