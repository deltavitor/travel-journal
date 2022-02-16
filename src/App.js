import React from "react"

import Header from "./components/Header.js"
import TravelEntry from "./components/TravelEntry.js"

import data from "./data.js"

function App() {
  const entries = data.map(function(item) {
    return (
      <TravelEntry
        key={item.id}
        item={item}
      />
    )
  })
  return(
    <div>
      <Header />
      <section className="travel-entries--container">
        {entries}
      </section>
    </div>
  )
}

export default App
