import React, { useState } from "react";
import { Form } from 'semantic-ui-react'

function EventSubmit({ tripData, handleNewEvent }) {

  const categoryOptions = [
    { text:"Tourism", value: "Tourism"},
    { text:"Food", value:"Food"},
    { text:"Transportation", value:"Transportation"},
    { text:"Lodging", value:"Lodging"}]

  const tripNameOptions = tripData.map(value => {
    return {id: value.id, text: value.tripName, value: value.tripName}
  })

  const [formData, setFormData] = useState({
    tripName:"",
    event: "",
    cost: 0.00,
    category: "",
    date: "",
  })

  function handleChange (e, {value, name}){
    setFormData({
      ...formData,
      [name]:value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()

    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => handleNewEvent(data))
    
    console.log(event.target)
  }

  return(
    <div id="eventform">
      <Form 
        id="eventSubmit"
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            label="Event Description:"
            type="text"
            name="event"
            placeholder="Brief event Description"
            onChange={handleChange}
            value={formData.event}
          />
          <Form.Input
            label="Event Cost:"
            type="number"
            name="cost"
            step="0.1"
            placeholder="Enter Event cost"
            onChange={handleChange}
            value={formData.cost}
          />
          <Form.Input
            label="Event Date" 
            type="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
          />
          </Form.Group>
          <Form.Select
            label="Trip Name"
            name="tripName"
            onChange={handleChange}
            options={tripNameOptions}
            placeholder="Select Trip Name"
            selection
            value={formData.tripName}
          >
          </Form.Select>
          <Form.Select
            label="Event Category"
            name="category"
            options={categoryOptions}
            placeholder="Select Event Category"
            selection
            onChange={handleChange}
            value={formData.category}
          >
          </Form.Select>
          <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )

}

export default EventSubmit;