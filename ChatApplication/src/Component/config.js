import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import {addItemsToOptions}  from "./LearningOptions/LearningOptions";

import LearningOptions from "./LearningOptions/LearningOptions";
import AppointmentOptions from "./LearningOptions/AppointmentOptions";
import ScheduleAppointmentOptions from "./LearningOptions/ScheduleAppointmentOptions";
import RescheduleAppointmentOptions from "./LearningOptions/RescheduleAppointmentOptions";

import ScheduledAppointmentAnsOptions from "./LearningOptions/ScheduledAppointmentAnsOptions";
import RescheduledAppointmentAnsOptions from "./LearningOptions/RescheduledAppointmentAnsOptions";

import LinkList from "./LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. How do I help you?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    }
  ],
};

export function addItem() {
  config.widgets.push( {
    widgetName: "appointmentOptions",
    widgetFunc: (props) => <AppointmentOptions {...props} />,
  });
}

export function addScheduleItem() {
  config.widgets.push( {
    widgetName: "scheduleOptions",
    widgetFunc: (props) => <ScheduleAppointmentOptions {...props} />,
  });
}

export function addRescheduleItem() {
  config.widgets.push( {
    widgetName: "rescheduleOptions",
    widgetFunc: (props) => <RescheduleAppointmentOptions {...props} />,
  });
}

export function addAnswerForScheduleItem() {
  config.widgets.push( {
    widgetName: "ansScheduleOptions",
    widgetFunc: (props) => <ScheduledAppointmentAnsOptions {...props} />,
  });
}

export function addAnswerForReScheduleItem() {
  config.widgets.push( {
    widgetName: "ansRescheduleOptions",
    widgetFunc: (props) => <RescheduledAppointmentAnsOptions {...props} />,
  });
}

export default config;