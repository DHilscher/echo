import React, { Component } from "react";
import { connect } from "react-redux";

import Setting from "./Settings";

class SettingsContainer extends Component {
  static route = {
    navigationBar: {
      backgroundColor: "#00000000",
      borderBottomWidth: 0,
      translucent: true,
      header: {
        translucent: true
      }
    }
  };
  render() {
    return <Setting />;
  }
}

export default SettingsContainer;
