import React from "react";
import { Table } from "react-bootstrap"
import Chart from "react-apexcharts"



function BudgetPage({ tripData, eventsData }) {

  const series = eventsData.map(value => parseFloat(value.cost) )

  const labels = eventsData.map(value => value.category)
    

  return(
    <div>
      <div>
      {tripData.map(value => 
        <div id="budgetCard" key={value.id}>
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
                .filter(data => value.id === data.trip_id)
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
          <div id="piechartcontainer">
            <Chart 
              type="pie"
              width={300}
              height={300}
              series={series}
              options={{labels}}
            >

            </Chart>
          </div>
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
