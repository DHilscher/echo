import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./styles";
import { colors } from "../../config/styles";
import { goToRoute } from "../../lib/navigationHelpers";
import realm from "../../config/models";
import { getProjectList } from "../../redux/modules/projectList"; 
import NavigationBar from "../../components/NavigationBar";
import CustomSquareButton from "../../components/Buttons/CustomSquareButton";
import Loader from "../../components/Loader";
import AddButton from "../../components/Buttons/AddButton";

class ProjectBasedFeedback extends Component {
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
    this.updateProjectList();
    realm.addListener('change', this.updateProjectList);
  }

  updateProjectList = () => {
    this.props.dispatch(getProjectList());
  }

  render() {
    const { projectList, isLoading } = this.props;

    if (isLoading) {
      return (
        <Loader />
      );
    } 

    return (
      <View style={styles.projectContainer}>
        <NavigationBar pageTitle="Feedback"/>
        
        <View style={styles.questionWrapper}>
          <Text style={styles.questionText}>
            Choose a project!
          </Text>
        </View>

        <ScrollView style={styles.projectListContainer}>
          <View style={styles.optionProjectWrapper}>
            { projectList.map((projectName, index) => 
              <TouchableOpacity key={index} onPress={() => goToRoute("createForm")} activeOpacity={0.7}>
                <CustomSquareButton btnText={projectName}/>
              </TouchableOpacity>
            )}
    
          </View>
        </ScrollView>

        <TouchableOpacity onPress={() => goToRoute("project")} activeOpacity={0.7} style={styles.addbutton}>
          <AddButton />
        </TouchableOpacity>
      </View>

    );
  }
}

const mapStateToProps = state => {
  return {
    projectList: state.projectListReducer.projectList,
    isLoading: state.projectListReducer.isLoading,
  }
}

export default connect(mapStateToProps)(ProjectBasedFeedback)