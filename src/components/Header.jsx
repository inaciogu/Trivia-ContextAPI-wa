import React from "react";

function Header() {
  const username = localStorage.getItem('username');
  return (
    <header>
      <h1>{`Welcome ${username}`}</h1>
    </header>
  )
}

export default Header