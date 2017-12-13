import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../../config/styles';

const SingleTextField = ({ placeholder, handler }) => (
  <View>
    <TextInput 
      placeholder={placeholder} 
      placeholderTextColor={colors.lightestGreen}
      selectionColor={colors.yellow}
      autoCapitalize = "none"
      style={styles.textFieldText} 
      secureTextEntry={ placeholder === "password" ? true : false } 
      onChangeText={(text) => handler(text)} />
  </View>
);

SingleTextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SingleTextField;

