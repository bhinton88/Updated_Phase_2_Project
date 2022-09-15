import React from "react";
import { Table } from "react-bootstrap"
import PieChart from "./PieChart";




function BudgetPage({ tripData, eventsData }) {


  return(
    <div>
      <div>
      {tripData.map(value => 
        <div id="budgetcard" key={value.id}>
          <div id="infocontainer">
          <h2>{value.tripName}</h2>
          <div id="tablecontainer">
            <Table striped border="true" hover size="sm" >
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Category</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {eventsData
                .filter(data => value.tripName === data.tripName)
                .map(data => 
                      <tr key={data.id}>
                        <td>{data.event}</td>
                        <td>{data.category}</td>
                        <td>{data.cost}</td>
                      </tr>
                    )
                }
              </tbody>
            </Table>
            </div>
          </div>
          <PieChart 
            tripId={value.tripName} 
            eventsData={eventsData}
          />
        </div>
      )}
    </div>
  </div>
  )

}

export default BudgetPage;

// map over tripData.. create a table for each trip, with a total cost at the bottom of each

// maybe some sort of functionality that allows you to sort by category? or a pie graph

// when you click the button it takes you to the linked page
