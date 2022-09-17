import React from "react";
import Chart from "react-apexcharts"


function PieChart ({ tripId, eventsData }) {

  let categoryNames= []; 
  
  const preLabels = eventsData
                  .filter(data => tripId === data.tripName)
                  .map(data => {
                    if(categoryNames.includes(data.category)){
                      return null
                    } else {
                      categoryNames.push(data.category)
                      return data.category
                    }
                    })

  const labels = preLabels.filter(value => value !== null)

  // here we create a whole new array where we group events with the same category type

  const categoryGroup = labels.map(value => eventsData.filter(data => {
    if(tripId === data.tripName) {
     return value === data.category
    }
  }))

  // Then here, to return ONE value for each category we iterate over our above array, and add the values
  // to return an array with the corresponding figure for our lables

  const summedSeries = categoryGroup.map(value => value.reduce((prev, curr) => prev + parseFloat(curr.cost), 0))

return (
  <div id="piechartcontainer">
    <Chart 
    type="pie"
    width={300}
    height={300}
    series={summedSeries}
    options={{labels}}
    >
    </Chart>
  </div>
)

}

export default PieChart; 