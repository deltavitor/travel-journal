import React from "react"

import LocationIcon from "../images/location-icon.svg"

function TravelEntry(props) {
  return (
    <article className="travel-entry">
      <img className="travel-entry--image" src={require("../images/travel-entries/" + props.item.imageUrl)}/>
      <div className="travel-entry--details">
        <div className="travel-entry--location">
          <img className="travel-entry--location-icon" src={LocationIcon}/>
          <span className="travel-entry--country">{(props.item.location).toUpperCase()}</span>
          <a className="travel-entry--link" href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="travel-entry--title">{props.item.title}</h2>
        <span className="travel-entry--date">{props.item.startDate} - {props.item.endDate}</span>
        <p className="travel-entry--description">{props.item.description}</p>
      </div>
    </article>
  )
}

export default TravelEntry
