import React, { Component } from "react";
import { Text, View } from "react-native";
import ProjectP1 from "./ProjectP1";
import ProjectP2 from "./ProjectP2";
import { connect } from "react-redux";

import { nextProjectPage } from "../../redux/modules/project";

class ProjectContainer extends Component {
  static route = {
    navigationBar: {
      title: "New Project"
    }
  };
  componentDidMount() {
    this.props.projectPage;
  }

  render() {
    const { currentNavigatorUID, projectPage } = this.props;

    _nextPage = () => {
      this.props.dispatch(nextProjectPage(projectPage + 1));
    };

    console.log(projectPage);
    console.log(currentNavigatorUID);

    if (projectPage === 1) {
      return <ProjectP1 index={_nextPage} />;
    }
    if (projectPage === 2) {
      return <ProjectP2 />;
    }
  }
}

const mapStateToProps = state => {
  return {
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    projectPage: state.project.projectPage
  };
};
export default connect(mapStateToProps)(ProjectContainer);
