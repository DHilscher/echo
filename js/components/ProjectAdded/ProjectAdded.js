import React, { Component } from "react";

import SuccessPage from "../../components/SuccessPage";
import styles from "./styles";
import { colors } from "../../config/styles";
import BackButton from "../BackButton";

class ProjectAdded extends Component {
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
        pageTitle="NewProject"
        successText="Your project has been added!"
      />
    );
  }
}

export default ProjectAdded;
