import React, { useState, useEffect } from "react";
import "../index.css"
import { Route,Switch } from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import TripPage from "./TripPage";
import EventSubmit from "./EventSubmit";
import BudgetPage from "./BudgetPage";

function App() {

  const [tripData,setTripData] = useState([])
  const [eventsData, setEventsData] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/trips")
    .then(response => response.json()
    .then(data=> setTripData(data)))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/events")
    .then(response => response.json())
    .then(data =>  setEventsData(data))
  },[] )

  function handleNewEvent(data) {
    setEventsData([...eventsData, data])
  }

  function handleNewTrip(data){
    setTripData([...tripData, data])
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route  path="/" exact>
          <Home />
        </Route>
        <Route path="/Trips">
           <TripPage 
            tripData={tripData} 
            eventsData={eventsData}
            handleNewTrip={handleNewTrip}
          />
        </Route>
        <Route path="/Event_Form">
          <EventSubmit 
          eventsData={eventsData} 
          tripData={tripData} 
          handleNewEvent={handleNewEvent}
          />
        </Route>
        <Route path="/Budget">
          <BudgetPage 
          tripData={tripData} 
          eventsData={eventsData}
          />
        </Route>
      </Switch>
    </div>
  )

}

export default App; 


// - App
// --NavBar
// --Home
// --TripsPage
// ---Trip Form
// ---Trip List
// ----Trip card
// -----Events Page
// --Submit event
// --budget page
// ---Total cost
// ---pie graph 
//