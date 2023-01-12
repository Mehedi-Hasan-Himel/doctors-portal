import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: `Winson Herry`,
      review: ``,
      location: `California `,
      Img: people1,
    },
    {
      _id: 2,
      name: `Winson Herry`,
      review: ``,
      location: `California `,
      Img: people2,
    },
    {
      _id: 3,
      name: `Winson Herry`,
      review: ``,
      location: `California `,
      Img: people3,
    },
  ];

  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img className=" w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
        <div>
           {
              reviews.map(review => <Review></Review>)
           }
      </div>
    </section>
  );
};

export default Testimonial;
