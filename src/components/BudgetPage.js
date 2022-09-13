import React from "react";
import { Table } from "react-bootstrap"


function BudgetPage({ tripData, eventsData }) {


  return(
    <div>
      {tripData.map(value => 
        <div id="budgetCard">
          <h2>{value.tripName}</h2>
          <div id="tablecontainer">
            <Table striped border hover size="sm" >
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Category</th>
                  <th>Date of Event</th>
                </tr>
              </thead>
              <tbody>
                {eventsData
                .filter(data => value.id === data.trip_id)
                .map(data => 
                      <tr key={data.id}>
                        <td>{data.event}</td>
                        <td>{data.category}</td>
                        <td>{data.date}</td>
                      </tr>
                    )
                }
              </tbody>
            </Table>
          </div>
        </div>
        )}

    </div>
  )

}

export default BudgetPage;

// map over tripData.. create a table for each trip, with a total cost at the bottom of each

// maybe some sort of functionality that allows you to sort by category? or a pie graph