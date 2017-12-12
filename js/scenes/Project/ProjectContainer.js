import React, { Component } from "react";
import { Text, View } from "react-native";
import ProjectP1 from "./ProjectP1";
import ProjectP2 from "./ProjectP2";
import { connect } from "react-redux";

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
    const { currentNavigatorUID, projectPage, projectTitle, projectDesc } = this.props;

    _nextPage = (title, desc) => {
      this.props.dispatch(nextProjectPage(projectPage + 1));
      addProject(title, desc)
    };

    if (projectPage === 1) {
      return <ProjectP1 index={_nextPage} handleChange={this.handleChange} handleChange2={this.handleChange2} projectTitle={projectTitle} projectDesc={projectDesc} />;
    }
    if (projectPage === 2) {
      return <ProjectP2 />;
    }
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
