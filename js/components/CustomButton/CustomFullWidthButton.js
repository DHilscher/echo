// This is a full width button, which can be used in feedback and survey scene.
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CustomFullWidthButton = ({ btnText }) => (
  <View style={styles.fullWidthButtonWrapper}>
    <Text style={styles.fullWidthButtonText}>{btnText}</Text>
  </View>
);

CustomFullWidthButton.propTypes = {
  btnText: PropTypes.string.isRequired,
}; 

export default CustomFullWidthButton;
