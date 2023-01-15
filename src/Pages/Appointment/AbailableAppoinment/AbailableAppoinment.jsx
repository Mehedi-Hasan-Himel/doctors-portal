import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoinmentOption from "./AppoinmentOption";

const AbailableAppoinment = ({ selectedDate, setSelectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  useEffect(() => {
    fetch(`appoinmentOptions.json`)
      .then((res) => res.json())
      .then((data) => setAppoinmentOptions(data));
  }, []);
  return (
    <section className="my-16">
      <p className="text-center text-secondary font-bold">
        Abailable Appoinment on: {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-48	mt-6">
        {appoinmentOptions.map((option) => (
          <AppoinmentOption
            key={option._id}
            appoinmentOption={option}
          ></AppoinmentOption>
        ))}
      </div>
    </section>
  );
};

export default AbailableAppoinment;
