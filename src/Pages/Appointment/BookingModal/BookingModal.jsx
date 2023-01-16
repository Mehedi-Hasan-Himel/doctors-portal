import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment; // treatment is appoinment options just different name.
  const date = format(selectedDate, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.hone.value;

    console.log(date, slot, name, email, phone);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={date}
              className="input input-bordered w-full"
            />
            <select className="select select-bordered " name="slot">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              placeholder="Your Name"
              type="text"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <input
              name="Phone"
              type="tel"
              placeholder="Your phone number"
              className="input input-bordered w-full"
            />
            <br />
            <input
              className="w-full btn btn-accent"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
