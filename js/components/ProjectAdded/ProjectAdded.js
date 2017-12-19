import React, { Component } from "react";

import SuccessPage from "../../components/SuccessPage";
import styles from "./styles";
import { colors } from "../../config/styles";

class ProjectAdded extends Component {
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
        pageTitle="NewProject"
        successText="Your project has been added!"
      />
    );
  }
}

export default ProjectAdded;
