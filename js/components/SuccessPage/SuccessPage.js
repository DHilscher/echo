import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

import CustomButton from "../Buttons/CustomButton";
import CustomFeedbackButton from "../Buttons/CustomFeedbackButton";
import { goToRoute } from "../../lib/navigationHelpers";
import NavigationBar from "../NavigationBar";

import styles from "./styles";

const SuccessPage = ({ successText, pageTitle }) => {
  return (
    <View>
      <NavigationBar pageTitle={pageTitle} />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/icon-star.png")}
        />
        <Text style={styles.successText}>{successText}</Text>
        <TouchableOpacity
          onPress={() => goToRoute("home")}
          style={styles.homeButton}
        >
          <CustomButton btnText="Home" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToRoute("feedback")}
          style={styles.feedbackButton}
        >
          <CustomFeedbackButton btnText="Ask Feedback" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessPage;
