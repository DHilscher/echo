import React, { Component } from "react";
import { connect } from "react-redux";

import RegisterP1 from "../../components/Register";

class RegisterContainer extends Component {
  render() {
    return <RegisterP1 />;
  }
}

const mapStateToProps = state => {
  return {
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    registerPage: state.register.registerPage
  };
};
export default connect(mapStateToProps)(RegisterContainer);
