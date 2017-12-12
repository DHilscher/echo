import React, { Component } from "react";
import { Text, View } from "react-native";
import Project from "./Project";
import { connect } from "react-redux";
import { goToRoute } from "../../lib/navigationHelpers";

import { nextProjectPage } from "../../redux/modules/project";
import { projectTitle } from "../../redux/modules/projectReducer";
import { projectDesc } from "../../redux/modules/projectReducer";
import { addProject } from '../../config/models'

class ProjectContainer extends Component {
  static route = {
    navigationBar: {
      title: "New Project"
    }
  };

  componentDidMount() {
    this.props.projectPage;
  }

  handleChange = (value) => {
    this.props.dispatch(projectTitle(value))
  }

  handleChange2 = (value) => {
    this.props.dispatch(projectDesc(value))
  }

  render() {
    const { projectTitle, projectDesc } = this.props;
    
    handleProjectAdded = (title, desc) => {
      goToRoute("projectAdded")
      addProject(title, desc)
    };


    return (
      <Project
        projectTitle={projectTitle}
        projectDesc={projectDesc}
        handleProjectAdded={handleProjectAdded}
        handleChange={this.handleChange}
        handleChange2={this.handleChange2}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    projectPage: state.project.projectPage,
    projectTitle: state.projectReducer.projectTitle,
    projectDesc: state.projectReducer.projectDesc
  };
};
export default connect(mapStateToProps)(ProjectContainer);