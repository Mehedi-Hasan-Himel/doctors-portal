import React from "react";

const AppoinmentOption = ({ appoinmentOption, setTreatment }) => {
  const { name, slots } = appoinmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary font-bold justify-center">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : `Try another day.`}</p>
        <p>
          {slots.length} {slots.length <= 1 ? `Space` : `Spaces`} Abailabe
        </p>
        <div className="card-actions justify-center">
          <label
            disabled = {slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => setTreatment(appoinmentOption)}
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOption;
