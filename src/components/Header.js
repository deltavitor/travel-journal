import React from "react"

import WorldIcon from "../images/world-icon.svg"

function Header() {
  return (
    <header>
      <img className="header--icon" src={WorldIcon} />
      <h1 className="header--title">my travel journal.</h1>
    </header>
  )
}

export default Header
