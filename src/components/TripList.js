import React from "react";
import TripCard from "./TripCard";


function TripList({ tripData, eventsData }) {

  return(
    <div>
      {tripData.map(value => 
      <TripCard 
        trip={value} 
        key={value.id} 
        eventsData={eventsData}
      /> 
      )}
    </div>
  )

}


export default TripList;