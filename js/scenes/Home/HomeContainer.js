import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFullname, getEmail} from '../../redux/modules/firebase'
import store from '../../redux/store'
import Home from './Home';

class HomeContainer extends Component {

  componentDidMount() {
    const { user } = this.props
    store.dispatch(getFullname(user.uid))
    store.dispatch(getEmail(user.uid))
  }

  render() {
    const { fullName } = this.props.userInfo
    console.log(fullName)
    return (
      <Home fullname={fullName} />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    userInfo: state.fbuser
  };
}

export default connect(mapStateToProps)(HomeContainer);