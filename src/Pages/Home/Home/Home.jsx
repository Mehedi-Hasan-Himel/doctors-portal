import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppooinment from "../MakeAppooinment/MakeAppooinment";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppooinment></MakeAppooinment>
    </div>
  );
};

export default Home;
