import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import * as firebase from 'firebase';
import { NavigationActions } from '@expo/ex-navigation';

import Login from "./Login";
import { email, password } from "../../redux/modules/signup";
import Loader from '../../components/Loader';
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

  componentWillReceiveProps(nextProps) {
    if(this.props.isAuthed === null && nextProps.isAuthed === true) {
      goToRoute('home')
    }
  }


  render() {
    const { currentNavigatorUID, user, isAuthed } = this.props;

    return isAuthed === null 
    ? <Loader />
    : <View>
        <Login currentNavigatorUID={currentNavigatorUID} handleSubmit={this.handleSubmit} email={this.handleEmailChange} password={this.handlePasswordChange} />
      </View>
  }
}

const mapStateToProps = state => {
  return {
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    user: state.auth.user,
    isAuthed: state.auth.isAuthed,
    email: state.signup.email,
    password: state.signup.password
  };
};
export default connect(mapStateToProps)(LoginContainer);
