import React from "react";

import "./LearningOptions.css";

const ScheduledAppointmentAnsOptions = (props) => {
  const options = [
    {
      text: "When a patient sends an appointment request,it is reflected in the 'New Requests' tab in the Admin Assistant's home page, select 'Appointments' from the Menu and click on the 'Scheduled Appointments' tab to schedule an appointment as per the  availability of the selected doctor by the patient",
      handler: props.actionProvider.handleAnswerAppointSchedule,
      id: 1,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};



export default ScheduledAppointmentAnsOptions;