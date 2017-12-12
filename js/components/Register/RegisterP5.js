import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CustomButton from "../Buttons/CustomButton";
import { goToRoute } from "../../lib/navigationHelpers";
import { styles } from "./styles";

const Register5 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/registration/registration-1.png")}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>It's nice to meet you!</Text>
        </View>
        <View>
          <Text style={styles.journey}>
            Please check your registered email to confirm your account.
          </Text>
        </View>
        <TouchableOpacity onPress={() => goToRoute("home")}>
          <CustomButton btnText={"Home"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register5;
