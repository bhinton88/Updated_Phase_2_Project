import React from "react";
import { Form } from 'semantic-ui-react'

function EventSubmit( ) {

  return(
    <div id="eventform">
      <Form id="eventSubmit">
        <Form.Group widths="equal">
          <Form.Input
            label="Event Description:"
            type="text"
            name="event"
            placeholder="Brief event Description"
          />
          <Form.Input
            label="Event Cost:"
            type="number"
            name="cost"
            step="0.1"
            placeholder="Enter Event cost"
          />
          <Form.Input
            label="Event Date" 
            type="date"
            name="date"
          />
          </Form.Group>
          <br/>
          <label>Choose an Event Category</label>
          <select name="category">
            <option value="Tourism">Tourism</option>
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Lodging">Lodging</option>
          </select>
          <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )

}

export default EventSubmit;