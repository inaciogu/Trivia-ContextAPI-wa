import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import { Context } from "../provider/Provider";

function Game() {
  const { data } = useContext(Context);
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const navigate = useNavigate()

  const nextQuestion = () => {
    setIndex(index === data.length - 1 ? navigate('/') : index + 1);
    document.querySelector('.correct_answer').style.border = '';
    document.querySelectorAll('.incorrect_answers').forEach((answer) => {
      answer.style.border = '';
    });
  }

  const addScore = ({ target }) => {
    if (target.className !== 'incorrect_answers') {
      setScore(score + 20);
      target.style.border = '1px solid green';
      document.querySelectorAll('.incorrect_answers').forEach((answer) => {
        answer.style.border = '1px solid red';
      })
      console.log(score)
    }
    if (target.className === 'incorrect_answers') {
      target.style.border = '1px solid red';
      document.querySelector('.correct_answer')
        .style.border = '1px solid green';
    }
  }

  return (
    <div className="main">
      <Header score={score} />
      <p>{data.length && data[index].question}</p>
      <div className="answers">
        {data[index].incorrect_answers.map((answer, i) => (
          <button className="incorrect_answers" onClick={ addScore } key={i} type="button">{answer}</button>
        ))}
        <button className="correct_answer" onClick={ addScore }>{data[index].correct_answer}</button>
      </div>
      <Button onClick={ nextQuestion } variant="contained" color="primary">Next</Button>
    </div>
  )
}

export default Game;