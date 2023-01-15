import React from "react";
import Appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section
      className=" py-16"
      style={{
        background: `url(${Appointment})`,
      }}
    >
      <div className="text-center lg:w-[450px] mx-auto">
        <h3 className="text-primary font-bold text-xl">Contact Us</h3>
        <h2 className="text-4xl	text-white">Stay connected with us</h2>
        <form className="mt-6 flex flex-col items-center gap-3 ">
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full	 max-w-xs"
          />
          <textarea
            className="textarea w-9/12	h-32"
            placeholder="Your Message"
          ></textarea>
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
