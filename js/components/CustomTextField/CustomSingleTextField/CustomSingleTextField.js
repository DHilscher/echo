import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../../config/styles';

const SingleTextField = ({ placeholder }) => (
  <View>
    <TextInput 
      placeholder={placeholder} 
      placeholderTextColor={colors.mainGreen}
      selectionColor={colors.yellow}
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.textFieldText} 
      secureTextEntry={ placeholder === "password" ? true : false } />
  </View>
);

SingleTextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SingleTextField;

