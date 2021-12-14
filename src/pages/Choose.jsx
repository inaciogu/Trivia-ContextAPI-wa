import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { Button, TextField } from "@material-ui/core";
import { Context } from "../provider/Provider";
import { useNavigate } from "react-router";

function Choose() {
  const [questionsNumber, setQuestionsNumber] = useState(0);
  const { setData } = useContext(Context)
  const navigate = useNavigate()

  const getQuestions = async () => {
    const request = await fetch(`https://opentdb.com/api.php?amount=${questionsNumber}`)
    const json = await request.json();
    setData(json.results);
    navigate('/game');
  }

  return (
    <div className="choose">
      <Header />
      <h1>Trivia</h1>
      <h3>Choose a number of questions to answer</h3>
      <TextField onChange={ ({ target }) => setQuestionsNumber(target.value ) } type="number" placeholder="0" />
      <div>
        <Button onClick={ getQuestions } color="primary" variant="contained">Start</Button>
        <Button color="secondary" variant="contained">Cancel</Button>
      </div>
    </div>
  )
}

export default Choose;