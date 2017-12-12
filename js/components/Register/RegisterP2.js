import React, { Component } from "react";
import StepIndicator from "react-native-step-indicator";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { goToRoute } from "../../lib/navigationHelpers";

import CustomButton from "../Buttons/CustomButton";
import { indicatorStyles, styles } from "./styles";

const Register2 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/registration/registration-2.png")}
      />
      <View>
        <View>
          <Text>Tell us more about yourself?</Text>
        </View>
        <View>
          <TextInput editable={true} maxLength={30} />
          <Text>Your first & last name</Text>
        </View>
        <TouchableOpacity onPress={() => goToRoute("register3")}>
          <CustomButton btnText={">"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register2;
