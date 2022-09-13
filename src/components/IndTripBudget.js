import React from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function IndTripBudget({ eventsData }) {

  const params = useParams();

  return(
    <div>
        <Table striped border hover >
          <thead>
            <tr>
              <th>Event</th>
              <th>Category</th>
              <th>Date of Event</th>
            </tr>
          </thead>
          <tbody>
            {eventsData
            .filter(value => params === value.trip_id)
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

export default IndTripBudget;