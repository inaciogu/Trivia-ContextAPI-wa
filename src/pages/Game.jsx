import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import { Context } from "../context/Provider";

function Game() {
  const { data, setAnswers, answers } = useContext(Context);
  const [greenBorder, setGreenBorder] = useState(false);
  const [redBorder, setRedBorder] = useState(false);
  const [clicked, setClicked] = useState(false);
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
    setClicked(false);
    setGreenBorder(false);
    setRedBorder(false);
  }

  useEffect(() => {
    console.log(answers);
  }, [answers])

  const addScore = ({ target }) => {
    setClicked(!clicked);
    if (target.className !== 'incorrect_answers') {
      setAnswers({...answers, questions: [...answers.questions, data[index].question + ' - ' + target.value]});
      setScore(score + 20);
      setGreenBorder(true)
      setRedBorder(true)
    }
    if (target.className === 'incorrect_answers') {
      setAnswers({...answers, questions: [...answers.questions, data[index].question + ' - ' + target.value]});
      setRedBorder(true);
      setGreenBorder(true)
    }
  }

  return (
    <div>
      <Header score={score} />
      <div className="center">
        <p>{data.length && data[index].question}</p>
        <div className="answers">
          {data[index].incorrect_answers.map((answer, i) => (
            <button style={{ borderColor: redBorder && 'red' }} disabled={ clicked } value={answer} className="incorrect_answers" onClick={ addScore } key={i} type="button">{answer}</button>
          ))}
          <button style={{ borderColor: greenBorder && 'green' }} disabled={ clicked } value={data[index].correct_answer} className="correct_answer" onClick={ addScore }>{data[index].correct_answer}</button>
        </div>
        <Button onClick={ nextQuestion } variant="contained" color="primary">Next</Button>
      </div>
    </div>
  )
}

export default Game;