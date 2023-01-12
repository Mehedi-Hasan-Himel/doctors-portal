import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppooinment from "../MakeAppooinment/MakeAppooinment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppooinment></MakeAppooinment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
