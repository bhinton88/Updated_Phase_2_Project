import React, { useState } from "react";
import { Form, Input } from 'semantic-ui-react'

function EventSubmit({ tripData }) {

  const categoryOptions = [
    { text:"Tourism", value: "Tourism"},
    { text:"Food", value:"Food"},
    { text:"Transportation", value:"Transportation"},
    { text:"Lodging", value:"Lodging"}]

  const tripNameOptions = tripData.map(value => {
    return {id: value.id, text: value.tripName, value: value.tripName}
  })

  const [formData, setFormData] = useState({
    trip_id: 0,
    event: "",
    cost: 0.00,
    category: "",
    date: "",
  })

  function handleChange (e, {value, name}){
    console.log(name)
    console.log(value)
  }

  return(
    <div id="eventform">
      <Form id="eventSubmit">
        <Form.Group widths="equal">
          <Form.Input
            label="Event Description:"
            type="text"
            name="event"
            placeholder="Brief event Description"
            onChange={handleChange}
          />
          <Form.Input
            label="Event Cost:"
            type="number"
            name="cost"
            step="0.1"
            placeholder="Enter Event cost"
            onChange={handleChange}
          />
          <Form.Input
            label="Event Date" 
            type="date"
            name="date"
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Select
            label="Trip Name"
            options={tripNameOptions}
            placeholder="Select Trip Name"
            selection
            //dont forget to use value for controlled input
          >
          </Form.Select>
          <Form.Select
            label="Event Category"
            name="category"
            options={categoryOptions}
            placeholder="Select Event Category"
            selection
            //dont forget to use value for controlled input
          >
          </Form.Select>
          <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )

}

export default EventSubmit;