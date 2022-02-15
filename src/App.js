import React from "react"

import Header from "./components/Header.js"
import TravelEntry from "./components/TravelEntry.js"

import data from "./data.js"

function App() {
  const entries = data.map(function(item) {
    return (
      <TravelEntry item={item}/>
    )
  })
  return(
    <div>
      <Header />
      <section>
        {entries}
      </section>
    </div>
  )
}

export default App
