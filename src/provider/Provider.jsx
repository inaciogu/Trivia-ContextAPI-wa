import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);

  const value = { data, setData }
  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  )
}

export default Provider;