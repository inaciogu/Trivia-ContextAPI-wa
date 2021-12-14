import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const saveUser = () => {
    localStorage.setItem('username', username);
    navigate('/Choose')
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <TextField value={ username } variant="outlined" onChange={ ({ target }) => setUsername(target.value) } />
        <Button onClick={ saveUser } variant="contained" color="primary" >GO!</Button>
      </div>
    </div>
  )
}

export default Login;