import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../../config/styles';

const SingleTextField = ({ placeholder }) => (
  <View style={styles.textFieldWrapper}>
    <TextInput 
      placeholder={placeholder} 
      placeholderTextColor={colors.lightestGreen}
      selectionColor={colors.yellow}
      autoCapitalize = "none"
      style={styles.textFieldText} 
      secureTextEntry={ placeholder === "password" ? true : false } />
  </View>
);

SingleTextField.propTypes = {
  placeholder: PropTypes.string,
};

export default SingleTextField;

