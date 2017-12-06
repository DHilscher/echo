import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Home from './Home';
import { Loader } from '../../components/Loader';

class HomeContainer extends Component {
  state = {  }

  // static propTypes = {
  //   isLoading: PropTypes.bool.isRequired,
  // }

  render() {
    // if (isLoading) {
    //   return (
    //     <Loader />
    //   );
    // }
    return (

      // <Loader />
      <Home />
    );
  }
}

export default HomeContainer;