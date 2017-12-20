import React, { Component } from "react";
import { Text, View } from "react-native";
import Project from "./Project";
import { connect } from "react-redux";
import { goToRoute } from "../../lib/navigationHelpers";

import { projectTitle } from "../../redux/modules/projectReducer";
import { projectDesc } from "../../redux/modules/projectReducer";
import { addProject } from "../../config/models";
import { colors } from "../../config/styles";

class ProjectContainer extends Component {
  constructor() {
    super();
    this.state = {
      showReminder: false
    };
  }

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

  componentDidMount() {
    this.props.projectPage;
  }

  handleChange = value => {
    this.props.dispatch(projectTitle(value));
  };

  handleChange2 = value => {
    this.props.dispatch(projectDesc(value));
  };

  handleReminder = () => {
    if (this.state.showReminder === true) {
      this.setState({ showReminder: false });
    } else {
      this.setState({ showReminder: true });
    }
  };

  render() {
    const { projectTitle, projectDesc } = this.props;

    handleProjectAdded = (title, desc) => {
      goToRoute("projectAdded");
      addProject(title, desc);
    };

    return (
      <Project
        projectTitle={projectTitle}
        projectDesc={projectDesc}
        handleProjectAdded={handleProjectAdded}
        handleChange={this.handleChange}
        handleChange2={this.handleChange2}
        showReminder={this.state.showReminder}
        handleReminder={this.handleReminder}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    projectTitle: state.projectReducer.projectTitle,
    projectDesc: state.projectReducer.projectDesc
  };
};
export default connect(mapStateToProps)(ProjectContainer);
