import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import { colors } from "../../config/styles";
import { goToRoute } from "../../lib/navigationHelpers";
import ArrowButton from "../Buttons/ArrowButton";
import TopStepIndicator from "../TopStepIndicator";
import CustomSingleTextField from "../CustomTextField/CustomSingleTextField";

const Register2 = () => {
  return (
    <View style={styles.registerContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/images/registration/registration-2.png")}
      />

        <View style={styles.stepIndicatorWrapper}>
          <TopStepIndicator stepCount={3} currentPosition={0}/>
        </View>

        <View style={styles.registerContentContainer}>
          <View style={styles.contentQuestionWrapper}>
            <Text style={styles.registerExplainText}>Tell us more about yourself?</Text>
            <CustomSingleTextField placeholder="Your first name & last name"/>
          </View>

          <View style={styles.arrowButtonWrapper}>
            <TouchableOpacity onPress={() => goToRoute("register3")}>
              <ArrowButton color={colors.red} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => goToRoute("login")}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
};

export default Register2;
