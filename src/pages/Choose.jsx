import React, { useContext } from "react";
import Header from "../components/Header";
import { Button } from "@material-ui/core";
import { Context } from "../provider/Provider";
import { useNavigate } from "react-router";

function Choose() {
  const { setData, questionsNumber } = useContext(Context)
  const navigate = useNavigate()

  const getQuestions = async () => {
    const request = await fetch(`https://opentdb.com/api.php?amount=${questionsNumber}`)
    const json = await request.json();
    setData(json.results);
    navigate('/game');
  }

  return (
    <div className="choose">
      <Header score="0" />
      <div>
        <Button onClick={ getQuestions } color="primary" variant="contained">Start</Button>
        <Button onClick={ () => navigate('/') } color="secondary" variant="contained">Cancel</Button>
      </div>
    </div>
  )
}

export default Choose;