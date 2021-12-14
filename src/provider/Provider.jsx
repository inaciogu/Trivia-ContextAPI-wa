import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [questionsNumber, setQuestionsNumber] = useState(0);

  const value = { data, setData, questionsNumber, setQuestionsNumber }
  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  )
}

export default Provider;