import React, { Component } from "react";
import { Text, View } from "react-native";
import Project from "./Project";
import { connect } from "react-redux";

class ProjectContainer extends Component {
  static route = {
    navigationBar: {
      title: "New Project"
    }
  };

  render() {
    return <Project />;
  }
}

const mapStateToProps = state => {
  return {
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    projectPage: state.project.projectPage
  };
};
export default connect(mapStateToProps)(ProjectContainer);
