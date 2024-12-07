import React from "react";
import Banner from "../banner/Banner";
import About from "../about/About";

function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-10 md:mt-0">
        <About></About>
      </div>
    </div>
  );
}

export default Home;
