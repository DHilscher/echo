import React, { Component } from "react";

import SuccessPage from "../../components/SuccessPage";
import BackButton from "../BackButton";

class FormSent extends Component {
  static route = {
    navigationBar: {
      backgroundColor: "#00000000",
      borderBottomWidth: 0,
      translucent: true,
      header: {
        translucent: true
      },
      renderLeft: (route, props) => <BackButton />
    }
  };
  render() {
    return (
      <SuccessPage
        pageTitle="Send Form"
        successText="Your request has been sent! Look forward to the feedback!"
      />
    );
  }
}

export default FormSent;
