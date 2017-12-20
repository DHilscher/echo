import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFullname, getEmail} from '../../redux/modules/firebase'
import store from '../../redux/store'
import Home from './Home';
import Loader from '../../components/Loader';

class HomeContainer extends Component {

  componentDidMount() {
    const { user } = this.props
    console.log(user)
    if(user){
      store.dispatch(getFullname(user.uid))
      store.dispatch(getEmail(user.uid))
    }
  }

  render() {
    const { fullName } = this.props.userInfo
    const { user } = this.props
    return (
      user 
      ? <Home fullname={fullName} />
      : <Loader />
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