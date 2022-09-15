import React from "react";
import TripForm from "./TripForm"
import TripList from "./TripList";

function TripsPage({ tripData, eventsData, handleNewTrip }) {


  return (
    <div>
      <TripForm 
        handleNewTrip={handleNewTrip}
      />
      <TripList 
        tripData={tripData} 
        eventsData={eventsData}
      /> 
    </div>
  )
}

export default TripsPage;