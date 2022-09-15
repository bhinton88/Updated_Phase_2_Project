import React from "react";
import Chart from "react-apexcharts"


function PieChart ({ tripId, eventsData }) {

  const series = eventsData.filter(data => tripId === data.tripName).map(data => parseFloat(data.cost)) 

  // need some logic that calculates the total cost for each category and then displays that. 

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

  console.log(series)
  console.log(labels)

return (
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
)

}

export default PieChart; 