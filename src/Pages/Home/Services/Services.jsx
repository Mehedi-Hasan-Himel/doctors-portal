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

      <div className="mt-40 ">
        <div className="grid items-center justify-items-center grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
          <figure>
            <img
              className="max-w-[458px] max-h-[576px] min-w-[70%] min-h-[350px]"
              src={treatment}
              alt="Album"
            />
          </figure>
          <div className="card-body w-3/4	">
            <h2 className="card-title text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h2>
            <br />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <br />
            <div>
              <button className="btn btn-primary">GET STARTED</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
