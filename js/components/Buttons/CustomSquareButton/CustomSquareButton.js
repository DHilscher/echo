// This is a square button, which can be used in project scene.
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CustomSquareButton = ({ btnText }) => (
  <View style={styles.squareWrapper}>
    <Text style={styles.squareButtonText}>{btnText}</Text>
  </View>
);

CustomSquareButton.propTypes = {
  btnText: PropTypes.string.isRequired,
}; 

export default CustomSquareButton;