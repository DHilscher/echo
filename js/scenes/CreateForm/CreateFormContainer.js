import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import CreateForm from "./CreateForm";
import { addFormTitle } from "../../redux/modules/formTitle";

class CreateFormContainer extends Component {
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

  handleFormTitle = (value) => {
    this.props.dispatch(addFormTitle(value))
  }

  render() {
    return (
      <View>
        <CreateForm handleFormTitle={this.handleFormTitle} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    formTitle: state.formTitleReducer.formTitle,
  }
}

export default connect(mapStateToProps)(CreateFormContainer)