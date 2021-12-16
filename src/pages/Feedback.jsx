import React, { useContext } from "react";
import '../App.css'
import { Context } from "../context/Provider";
import { AiOutlineCheck } from 'react-icons/ai'
import { BsXLg } from 'react-icons/bs'
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
      <ol>
        {answers.questions.map((answer, index) => (
          answer.includes(data[index].correct_answer) ? (
            <li key={index}>
              {answer} <AiOutlineCheck />
            </li>
          ) : 
          <li>
            {answer} <BsXLg /> - Correct answer: {data[index].correct_answer}
          </li>
        ))}
      </ol>
      <Button onClick={ () => navigate('/') } variant="contained" color="secondary">Go Home</Button>
    </div>
  );
}

export default Feedback;