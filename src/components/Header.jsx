import React from "react";
import '../App.css';

function Header({ score }) {
  const username = localStorage.getItem('username');
  return (
    <header>
      <h1>{`Welcome ${username}`}</h1>
      <h2>{`Hits: ${score}`}</h2>
    </header>
  )
}

export default Header