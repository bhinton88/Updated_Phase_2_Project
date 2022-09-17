import React from "react";

function TotalCost ( { tripName, eventsData } ) {

  const pricesArray= eventsData
                        .filter(value => tripName === value.tripName)
                        .map(data => parseFloat(data.cost))

  const totalCost = pricesArray.reduce((prev,current) => prev + current, 0) 

  return (
    <tr>
      <td colSpan={2}>Total:</td>
      <td id="totalcost">${totalCost}</td>
    </tr>

  )
}

export default TotalCost; 