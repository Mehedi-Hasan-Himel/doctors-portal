import React from "react";
import Chair from "../../../assets/images/chair.png";

const AppointmentBanner = () => {
  return (
    <header>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Chair}
            className="max-w-sm rounded-lg shadow-2xl" alt="Dentish Chair"
          />
              <div>
                 
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
