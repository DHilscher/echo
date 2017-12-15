import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { colors } from "../../../config/styles";

const ArrowButton = ({ color }) => (
  <Icon
    name="ios-arrow-dropright-circle"
    size={70}
    color={color}
  />
);

export default ArrowButton;