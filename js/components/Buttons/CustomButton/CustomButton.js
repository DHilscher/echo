import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CustomButton = ({ btnText }) => (
  <View style={styles.buttonWrapper}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{btnText}</Text>
    </View>
  </View>
);

CustomButton.propTypes = {
  btnText: PropTypes.string.isRequired,
};

export default CustomButton;
