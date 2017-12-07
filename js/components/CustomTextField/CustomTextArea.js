import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../config/styles';

const CustomTextArea = ({ placeholder }) => (
  <View style={styles.textAreaWrapper}>
    <TextInput 
      placeholder={placeholder}
      placeholderTextColor={colors.lightestGreen}
      selectionColor={colors.yellow} 
      multiline={true}
      style={styles.textAreaText} />
  </View>
);

CustomTextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default CustomTextArea;