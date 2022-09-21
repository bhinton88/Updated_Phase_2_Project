import React from "react";

function Home() {
  return (
    <div id="homepagecontainer" className="container text-center">
      <div id="imagescontainer">
        <img 
            src={require("../images/suitcases-gf38b72692_1280.png")} 
            className="homeimages"
            alt="colorful suitcases with international stickers"
         />
         <img 
          src={require("../images/world-g7fb8fbf37_1280.png")}
          className="homeimages"
          alt="the globe"
         />
      </div>
      <div id="logocontainer">
         <img 
          src={require("../images/travelogo.png")}
          className="homeimages"
          alt="Lets Travel!"
         />
      </div>
    </div>
  )
}

export default Home;