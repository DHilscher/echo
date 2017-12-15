import React, { Component } from "react";
import { Text, View } from "react-native";
import Login from "./Login";
import { connect } from "react-redux";
import * as firebase from 'firebase';
import { email, password } from "../../redux/modules/signup";

import { goToRoute } from "../../lib/navigationHelpers";

class LoginContainer extends Component {
  constructor(){
    super()
      this.state = {
          error: '',
      }
  }

  handleSubmit = (event) => {
    const { email, password } = this.props;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({ error: "Your email or password is incorrect."})
      });
  };

  handleEmailChange = (value) => {
    this.props.dispatch(email(value))
  }

  handlePasswordChange = (value) => {
    this.props.dispatch(password(value))
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated ) {
      goToRoute('home')
    } 
  }


  render() {
    const { currentNavigatorUID, isAuthenticated } = this.props;

    return (
      <View>
        <Login currentNavigatorUID={currentNavigatorUID} handleSubmit={this.handleSubmit} email={this.handleEmailChange} password={this.handlePasswordChange} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    isAuthenticated: state.auth.user,
    email: state.signup.email,
    password: state.signup.password
  };
};
export default connect(mapStateToProps)(LoginContainer);
