import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

import CustomButton from "../Buttons/CustomButton";
import { goToHome, goToFeedback } from "../../lib/navigationHelpers";

import styles from "./styles";

const SuccessPage = ({ successText }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon-star.png")} />
      <Text>{successText}</Text>
      <TouchableOpacity onPress={() => goToHome()} style={styles.nextButton}>
        <CustomButton btnText="Home" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToFeedback()}
        style={styles.nextButton}
      >
        <CustomButton btnText="Ask Feedback" />
      </TouchableOpacity>
    </View>
  );
};

export default SuccessPage;
