import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [questionsNumber, setQuestionsNumber] = useState(0);
  const [answers, setAnswers] = useState({ questions: [], answer: [] });

  const value = { data, setData, questionsNumber, setQuestionsNumber, answers, setAnswers }
  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  )
}

export default Provider;