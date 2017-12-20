import React from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import { colors } from "../../../config/styles";

const SingleTextField = ({ placeholder, handler, value }) => (
  <View style={styles.textFieldWrapper}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.mainGreen}
      selectionColor={colors.yellow}
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.textFieldText}
      secureTextEntry={placeholder === "password" ? true : false}
      onChangeText={text => handler(text)}
      value={value}
    />
  </View>
);

SingleTextField.propTypes = {
  placeholder: PropTypes.string
};

export default SingleTextField;
