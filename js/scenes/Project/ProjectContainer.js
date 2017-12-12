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
  componentDidMount() {
    this.props.projectPage;
  }

  // componentWillUnmount() {
  //   this.props.dispatch(resetProjectPage());
  // }

  // _resetPage = () => {
  //   this.props.dispatch(nextProjectPage(1));
  // };

  render() {
    const { currentNavigatorUID, projectPage } = this.props;

    _nextPage = () => {
      this.props.dispatch(nextProjectPage(projectPage + 1));
    };

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
