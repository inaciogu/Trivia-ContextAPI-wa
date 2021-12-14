import React from "react";

function Header({ score }) {
  const username = localStorage.getItem('username');
  return (
    <header>
      <h1>{`Welcome ${username}`}</h1>
      <h2>{`Score: ${score}`}</h2>
    </header>
  )
}

export default Header