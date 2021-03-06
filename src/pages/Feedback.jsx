import React from "react";
import '../App.css';
import { AiOutlineCheck } from 'react-icons/ai'
import { BsXLg } from 'react-icons/bs'
import Header from "../components/Header";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Feedback() {
  const getData = localStorage.getItem('data');
  const data = JSON.parse(getData);
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
      <Button style={{ padding: '10px', marginBottom: '15px' }} onClick={ () => navigate('/') } variant="contained" color="secondary">Go Home</Button>
    </div>
  );
}

export default Feedback;