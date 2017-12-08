import React, { Component } from "react";
import { connect } from "react-redux";
import { nextRegisterPage } from "../../redux/modules/register";

import RegisterP1 from '../../components/Register';
import {RegisterP2} from '../../components/Register';
import {RegisterP3} from '../../components/Register';
import {RegisterP4} from '../../components/Register';
import {RegisterP5} from '../../components/Register';


class RegisterContainer extends Component {

  componentDidMount() {
    this.props.registerPage;
  }
  
  render() {
    
    const { currentNavigatorUID, registerPage } = this.props;
    
    _nextPage = () => {
      this.props.dispatch(nextRegisterPage(registerPage + 1));
    };

    if (registerPage === 1) {
      return <RegisterP1 index={_nextPage} />;
    }
  if (registerPage === 2) {
      return <RegisterP2 index={_nextPage}/>;
    }
  if (registerPage === 3) {
      return <RegisterP3 index={_nextPage}/>;
    }
  if (registerPage === 4) {
      return <RegisterP4 index={_nextPage}/>;
    }
  if (registerPage === 5) {
      return <RegisterP5 />;
    }
  }
}

const mapStateToProps = state => {
  return {
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    registerPage: state.register.registerPage
  };
};
export default connect(mapStateToProps)(RegisterContainer);
