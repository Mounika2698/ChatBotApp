import React from "react";

import "./LearningOptions.css";

const RescheduleAppointmentOptions = (props) => {
  const options = [
    {
      text: "How to reschedule an appointment?",
      handler: props.actionProvider.handleAnswerAppointReSchedule,
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



export default RescheduleAppointmentOptions;