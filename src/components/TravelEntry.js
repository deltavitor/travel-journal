import React from "react"

import LocationIcon from "../images/location-icon.svg"
import MountFuji from "../images/travel-entries/mount-fuji.png"

function TravelEntry() {
  return (
    <article>
      <img src={MountFuji}/>
      <div>
        <div>
          <img src={LocationIcon}/>
          <span>Japan</span>
          <a>View on Google Maps</a>
        </div>
        <h2>Mount Fuji</h2>
        <span>12 Jan, 2021 - 24 Jan, 2021</span>
        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>
    </article>
  )
}

export default TravelEntry
