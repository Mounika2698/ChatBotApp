import React from "react";

import "./LearningOptions.css";

const AppointmentOptions = (props) => {
  const options = [
    {
      text: "schedule appointment",
      handler: props.actionProvider.handleAppointSchedule,
      id: 1,
    },
    {
      text: "reschedule appointment",
      handler: props.actionProvider.handleAppointReSchedule,
      id: 2,
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



export default AppointmentOptions;