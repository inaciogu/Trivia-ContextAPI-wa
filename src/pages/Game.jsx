import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { Context } from "../provider/Provider";

function Game() {
  const { data } = useContext(Context);
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()

  const nextQuestion = () => {
    setIndex(index === data.length - 1 ? navigate('/') : index + 1);
  }

  return (
    <div className="main">
      <p>{data.length && data[index].question}</p>
      <div className="answers">
        {data[index].incorrect_answers.map((answer, i) => (
          <button key={i} type="button">{answer}</button>
        ))}
        <button>{data[index].correct_answer}</button>
      </div>
      <Button onClick={ nextQuestion } variant="contained" color="primary">Next</Button>
    </div>
  )
}

export default Game;