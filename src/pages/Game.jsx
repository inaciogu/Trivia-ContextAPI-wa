import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import { Context } from "../context/Provider";

function Game() {
  const { data, setAnswers, answers } = useContext(Context);
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const navigate = useNavigate()

  const nextQuestion = () => {
    setIndex(index === data.length - 1 ? navigate('/feedback') : index + 1);
    if (index === data.length - 1) {
      localStorage.setItem('score', score);
      localStorage.setItem('answers', JSON.stringify(answers));
      navigate('/feedback');
    } else {
      setIndex(index + 1)
    }
    document.querySelector('.correct_answer').style.border = '';
    document.querySelectorAll('.incorrect_answers').forEach((answer) => {
      answer.style.border = '';
    });
  }

  useEffect(() => {
    console.log(answers);
  }, [answers])

  const addScore = ({ target }) => {
    if (target.className !== 'incorrect_answers') {
      setAnswers({...answers, questions: [...answers.questions, data[index].question + ' - ' + target.value + 'correct']});
      setScore(score + 20);
      target.style.border = '1px solid green';
      document.querySelectorAll('.incorrect_answers').forEach((answer) => {
        answer.style.border = '1px solid red';
      })
    }
    if (target.className === 'incorrect_answers') {
      setAnswers({...answers, questions: [...answers.questions, data[index].question + ' - ' + target.value]});
      target.style.border = '1px solid red';
      document.querySelector('.correct_answer')
        .style.border = '1px solid green';
    }
  }

  return (
    <div>
      <Header score={score} />
      <div className="center">
        <p>{data.length && data[index].question}</p>
        <div className="answers">
          {data[index].incorrect_answers.map((answer, i) => (
            <button value={answer} className="incorrect_answers" onClick={ addScore } key={i} type="button">{answer}</button>
          ))}
          <button value={data[index].correct_answer} className="correct_answer" onClick={ addScore }>{data[index].correct_answer}</button>
        </div>
        <Button onClick={ nextQuestion } variant="contained" color="primary">Next</Button>
      </div>
    </div>
  )
}

export default Game;