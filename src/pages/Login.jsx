import React, { useState, useContext } from "react";
import '../App.css'
import { FcDocument } from 'react-icons/fc'
import { TextField, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Provider";

function Login() {
  const [username, setUsername] = useState('');
  const { setQuestionsNumber, questionsNumber } = useContext(Context)
  const navigate = useNavigate()

  const saveUser = () => {
    localStorage.setItem('username', username);
    navigate('/choose')
  };

  return (
    <div className="center">
      <div className="logo-box">
        <div className="wa-logo">
        <img width="80px" src="https://images.gupy.io/unsafe/100x100/https://s3.amazonaws.com/gupy5/production/companies/2151/career/3661/images/2021-02-23_14-08_logo.png" alt="" />
        </div>
        <div className="trivia-logo">
          <img src="/trivia.png" width="600px" alt="" />
        </div>
        <TextField placeholder="Username" value={username} variant="outlined" onChange={({ target }) => setUsername(target.value)} />
      </div>
      <div>
        <TextField required placeholder="Number of Questions" variant="outlined" name="questions-number" onChange={({ target }) => setQuestionsNumber(target.value)} type="number" />
      </div>
      <Button disabled={questionsNumber <= 0} onClick={saveUser} variant="contained" color="primary">Sign In</Button>
      <Button onClick={() => navigate('/feedback')} style={ { marginLeft: '30px' } } type="button">
        <FcDocument size="30px"/>
      </Button>
    </div>
  )
}

export default Login;