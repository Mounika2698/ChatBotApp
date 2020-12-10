import React from "react";

import "./LearningOptions.css";

const ScheduleAppointmentOptions = (props) => {
  const options = [
    {
      text: "How to schedule an appointment?",
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



export default ScheduleAppointmentOptions;