import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import Survey from './Survey';
import { colors } from '../../config/styles';

class SurveyContainer extends Component {
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
    const { formTitle } = this.props;
    return (
      <View>
        <Survey formTitle={formTitle} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    formTitle: state.formTitleReducer.formTitle,
  }
}

export default connect(mapStateToProps)(SurveyContainer)