import React, { useState } from 'react';
import AbailableAppoinment from '../AbailableAppoinment/AbailableAppoinment';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Appointment = () => {
      const [selectedDate, setSelectedDate] = useState(new Date());

   return (
     <div>
       <AppointmentBanner
         selectedDate={selectedDate}
         setSelectedDate={setSelectedDate}
       ></AppointmentBanner>
       <AbailableAppoinment
         selectedDate={selectedDate}
         setSelectedDate={setSelectedDate}
       ></AbailableAppoinment>
     </div>
   );
};

export default Appointment;