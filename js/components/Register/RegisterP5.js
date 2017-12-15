import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import CustomButton from "../Buttons/CustomButton";
import { goToRoute } from "../../lib/navigationHelpers";

const Register5 = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require("../../assets/images/registration/registration-1.png")} />

      <View style={styles.contentWrapper}>
        <View style={styles.contentTextWrapper}>
          <Text style={styles.meetText}>It's nice to meet you!</Text>
          <Text style={styles.checkEmailText}>Please check your registered email to confirm your account.</Text>
        </View>

        <TouchableOpacity onPress={() => goToRoute("home")}>
          <CustomButton btnText={"Home"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register5;
