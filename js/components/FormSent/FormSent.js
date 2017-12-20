import React, { Component } from "react";

import SuccessPage from "../../components/SuccessPage";
import { colors } from "../../config/styles";

class FormSent extends Component {
  static route = {
    navigationBar: {
      backgroundColor: "#00000000",
      tintColor: colors.darkGreen,
      borderBottomWidth: 0,
      translucent: true,
      header: {
        translucent: true
      }
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