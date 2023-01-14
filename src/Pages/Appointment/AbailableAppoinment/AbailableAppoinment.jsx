import { format } from 'date-fns';
import React from 'react';

const AbailableAppoinment = ({ selectedDate, setSelectedDate }) => {
  return (
    <section className='mt-16'>
      <p className="text-center text-secondary font-bold">
        Abailable Appoinment on: {format(selectedDate, "PP")}
      </p>
    </section>
  );
};

export default AbailableAppoinment;