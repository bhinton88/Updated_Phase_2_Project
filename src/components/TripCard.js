import React, { useState } from "react";
import EventsPage from "./EventsPage";
import { Accordion } from "react-bootstrap";


function TripCard({ trip, eventsData }) {

  const [toggleEvents, setToggleEvents] = useState(false)

  function handleClick (event) {
    setToggleEvents( toggleEvents => !toggleEvents)
    console.log(event.target.id)
  }


  return(
    <div id="tripcardcontainer">
      <div id="tripCard">
        <h2><strong>{trip.tripName}</strong></h2>
        <br/>
        <h4>Countries Visited:</h4>
          <ul>
            {trip.countries.map(value => <li key={value} >{value}</li>)}
          </ul>
          <p>Trip Start Date: {trip.start_date}</p>
          <p>Trip End Date: {trip.end_date}</p>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={handleClick}>{toggleEvents ? "Hide Trip Events" : "Show Trip Events"}</Accordion.Header>
              <Accordion.Body>
              {toggleEvents ? <EventsPage eventsData={eventsData} tripId={trip.id} /> : null}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <button id={trip.id} className="ui button" onClick={handleClick}>{toggleEvents ? "Hide Trip Events" : "Show Trip Events"}</button>
                {toggleEvents ? <EventsPage eventsData={eventsData} tripId={trip.id} /> : null} */}
      </div>
    </div>
  )
}


export default TripCard;


// things left to do:
// add buttons to take to budget page and to submit event form
// re-format trip cards 