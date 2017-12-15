import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import { colors } from "../../config/styles";
import CustomButton from "../Buttons/CustomButton";
import ArrowButton from "../Buttons/ArrowButton";
import { goToRoute } from "../../lib/navigationHelpers";

const Register1 = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../../assets/images/registration/registration-1.png")} />

      <View style={styles.contentWrapper}>
        <View style={styles.contentTextWrapper}>
          <Text style={styles.welcomeText}>Hello, welcome to echo!</Text>
          <Text style={styles.journeyText}>Begin your journey.</Text>
        </View>

        <TouchableOpacity onPress={() => goToRoute("register2")}>
          <ArrowButton color={colors.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register1;
