import React, { useState } from "react";
import Header from "../components/Header";
import { Button, TextField } from "@material-ui/core";

function Choose() {
  const [questionsNumber, setQuestionsNumber] = useState(0);

  const getQuestions = async () => {
    const request = await fetch(`https://opentdb.com/api.php?amount=${questionsNumber}`)
    const json = await request.json();
    console.log(json)
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