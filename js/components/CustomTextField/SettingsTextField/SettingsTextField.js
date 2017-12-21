import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';
import { colors } from "../../../config/styles";

const SettingsTextField = ({ label, placeholder, value, onChangeText }) => (
  <View style={styles.textFieldWrapper}>
    <TextInput
      label={label}
      placeholder={placeholder}
      placeholderTextColor={colors.lightestGreen}
      selectionColor={colors.yellow}
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.textFieldText}
      secureTextEntry={label === "password" ? true : false}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export default SettingsTextField;