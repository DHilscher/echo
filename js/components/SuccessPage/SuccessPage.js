import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

import CustomButton from "../Buttons/CustomButton";
import { goToRoute } from "../../lib/navigationHelpers";

import styles from "./styles";

const SuccessPage = ({ successText }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon-star.png")} />
      <Text>{successText}</Text>
      <TouchableOpacity
        onPress={() => goToRoute("home")}
        style={styles.nextButton}
      >
        <CustomButton btnText="Home" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToRoute("feedback")}
        style={styles.nextButton}
      >
        <CustomButton btnText="Ask Feedback" />
      </TouchableOpacity>
    </View>
  );
};

export default SuccessPage;
