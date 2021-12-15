import React, { useContext } from "react";
import { Context } from "../context/Provider";
import { AiOutlineCheck } from 'react-icons/ai'
import Header from "../components/Header";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Feedback() {
  const { data } = useContext(Context);
  const score = localStorage.getItem('score')
  const getAnswers = localStorage.getItem('answers')
  const answers = JSON.parse(getAnswers)
  const navigate = useNavigate()
  return (
    <div>
      <Header score={score} />
      <h1>Feedback</h1>
      <div>
        {answers.questions.map((answer, index) => (
          answer.includes('correct') ? (
            <p>{answer.replace('correct', '')} <AiOutlineCheck /></p>
          ) : <p>{`${answer} - Correct answer: ${data[index].correct_answer}`}</p>
        ))}
      </div>
      <Button onClick={ () => navigate('/') } variant="contained" color="secondary">Go Home</Button>
    </div>
  );
}

export default Feedback;