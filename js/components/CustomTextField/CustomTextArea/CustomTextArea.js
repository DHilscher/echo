import React from "react";
import { View, TextInput } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import { colors } from "../../../config/styles";

const CustomTextArea = ({ placeholder, defaultValue, handler }) => (
  <View style={styles.textAreaWrapper}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.mainGreen}
      selectionColor={colors.yellow}
      multiline={true}
      defaultValue={defaultValue}
      style={styles.textAreaText}
      onChangeText={text => handler(text)}
    />
  </View>
);

CustomTextArea.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string
};

export default CustomTextArea;
