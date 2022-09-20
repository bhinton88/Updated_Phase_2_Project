import React from "react";

function Home() {
  return (
    <div id="homepagecontainer">
      <div class="container text-center">
        <div class="row row-cols-2">
          <div class="col">
            <img src={require("../images/suitcases-gf38b72692_1280.png")} className="homeimages"/>
          </div>
          <div class="col">
            <img src={require("../images/icon-ga597a5308_1280.png")} className="homeimages" />
          </div>
          <div class="col">
          <img src={require("../images/passport-g953f8992c_1280.png")} className="homeimages" />
          </div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
  )
}

export default Home;


{/* <div id="images">
      <img src={require("../images/suitcases-gf38b72692_1280.png")} />
      </div>
      <h1>Travel with friends!</h1> */}