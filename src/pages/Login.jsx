import React, { useState, useContext } from "react";
import { TextField, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { Context } from "../provider/Provider";

function Login() {
  const [username, setUsername] = useState('');
  const { setQuestionsNumber } = useContext(Context)
  const navigate = useNavigate()

  const saveUser = () => {
    localStorage.setItem('username', username);
    navigate('/Choose')
  };

  return (
    <div>
      <div>
        <div><img src="/trivia.png" width="400px" alt="" /></div>
        <TextField placeholder="Username" value={ username } variant="outlined" onChange={ ({ target }) => setUsername(target.value) } />
      </div>
          <div>
            <TextField placeholder="Number of Questions" variant="outlined" name="questions-number" onChange={ ({ target }) => setQuestionsNumber(target.value ) } type="number"/>
          </div>
      <Button onClick={ saveUser } variant="contained" color="primary">Sign In</Button>
    </div>
  )
}

export default Login;