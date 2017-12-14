import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import { colors } from "../../config/styles";
import { goToRoute } from "../../lib/navigationHelpers";
import ArrowButton from "../Buttons/ArrowButton";
import TopStepIndicator from "../TopStepIndicator";
import CustomSingleTextField from "../CustomTextField/CustomSingleTextField";

const Register3 = () => {
  return (
    <View style={styles.registerContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/images/registration/registration-3.png")}
      />

        <View style={styles.stepIndicatorWrapper}>
          <TopStepIndicator stepCount={3} currentPosition={1}/>
        </View>

        <View style={styles.registerContentContainer}>
          <View style={styles.contentQuestionWrapper}>
            <Text style={styles.registerExplainText}>What industry of freelance do work in?</Text>
            <CustomSingleTextField placeholder="Your professional field"/>
          </View>

          <View style={styles.arrowButtonWrapper}>
            <TouchableOpacity onPress={() => goToRoute("register4")}>
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

export default Register3;
