import React from "react";
import TripForm from "./TripForm"
import TripList from "./TripList";

function TripsPage({ tripData, eventsData }) {


  return (
    <div>
      <TripForm />
      <TripList 
        tripData={tripData} 
        eventsData={eventsData}
      /> 
    </div>
  )
}

export default TripsPage;