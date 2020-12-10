import React from "react";

import "./LearningOptions.css";

const RescheduledAppointmentAnsOptions = (props) => {
  const options = [
    {
      text: "To reschedule an appointment, select 'Appointments' and click on 'RESCHEDULE' in the 'Scheduled Appointments' tab in the  Admin Assistant's home page.",
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



export default RescheduledAppointmentAnsOptions;