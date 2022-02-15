import React from "react"

import LocationIcon from "../images/location-icon.svg"

function TravelEntry(props) {
  return (
    <article>
      <img src={require("../images/travel-entries/" + props.item.imageUrl)}/>
      <div>
        <div>
          <img src={LocationIcon}/>
          <span>{props.item.location}</span>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.item.title}</h2>
        <span>{props.item.startDate} - {props.item.endDate}</span>
        <p>{props.item.description}</p>
      </div>
    </article>
  )
}

export default TravelEntry
