import React,{Component} from 'react';
import axios from 'axios';
import {addItem, addScheduleItem, addRescheduleItem, addAnswerForReScheduleItem, addAnswerForScheduleItem} from './config';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.getData();
  }

  getData() {
    axios.post("https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment",{"type":"Search", "value": "appointment"})
    .then(response => {
      console.log("response:"+JSON.stringify(response.data));
    })
    .catch(err => {
      console.log("err:"+ err.message);
    })
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleJavascriptList = () => {;
    addItem();

    const message = this.createChatBotMessage(
      "I will definitely help you",
      {
        widget: "appointmentOptions",
      }
    );

    this.updateChatbotState(message);
  };

  handleAppointSchedule = () => {
    addScheduleItem();

    const message = this.createChatBotMessage(
      "Please choose a question",
      {
        widget: "scheduleOptions",
      }
    );

    this.updateChatbotState(message);
  };


  handleAppointReSchedule = () => {
    addRescheduleItem();
    const message = this.createChatBotMessage(
      "Please choose a question",
      {
        widget: "rescheduleOptions",
      }
    );

    this.updateChatbotState(message);
  };


  handleAnswerAppointSchedule = () => {
    addAnswerForScheduleItem();
    const message = this.createChatBotMessage(
      "Answer here",
      {
        widget: "ansScheduleOptions",
      }
    );

    this.updateChatbotState(message);
  };

  handleAnswerAppointReSchedule = () => {
    addAnswerForReScheduleItem();
    const message = this.createChatBotMessage(
      "Answer here",
      {
        widget: "ansRescheduleOptions",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;

