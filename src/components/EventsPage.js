import React from "react";
import Table from 'react-bootstrap/Table';

function EventsPage({ tripId, eventsData }) {

return (
  <div>
    <Table striped border="true" hover >
      <thead>
        <tr>
          <th>Event</th>
          <th>Category</th>
          <th>Date of Event</th>
        </tr>
      </thead>
      <tbody>
        {eventsData
        .filter(value => tripId === value.tripName)
        .map(value => 
              <tr key={value.id}>
                <td>{value.event}</td>
                <td>{value.category}</td>
                <td>{value.date}</td>
              </tr>
            )
        }
      </tbody>
    </Table>
  </div>
  )
}

export default EventsPage;


// -EventsPage
// --EventsList
// --EventsForm