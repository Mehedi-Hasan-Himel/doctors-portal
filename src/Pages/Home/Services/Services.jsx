import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import cavity from "../../../assets/images/cavity.png";
import treatment from "../../../assets/images/treatment.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: `Fluoride Treatment`,
      description: `Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the`,
      Img: fluoride,
    },
    {
      id: 2,
      name: `Teeth Whitening`,
      description: `Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the`,
      Img: whitening,
    },
    {
      id: 3,
      name: `Cavity Filling`,
      description: `Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the`,
      Img: cavity,
    },
  ];

  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-primary uppercase text-xl font-bold">
          Our Services
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="mt-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>

      <div className="hero min-h-screen mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="img"
          />
          <div className="w-1/2	ml-9">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms!
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
