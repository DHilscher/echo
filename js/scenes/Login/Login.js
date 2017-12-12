import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import { goToHome } from "../../lib/navigationHelpers";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSingleTextField from "../../components/CustomTextField/CustomSingleTextField";

const Login = ({ currentNavigatorUID }) => {

  return (
    <View style={styles.container}>
      <View style={styles.loginHeaderWrapper}>
        <Image source={require('../../assets/images/login/login-items.png')}/>
        <Image source={require('../../assets/images/echo-logo-white.png')} style={styles.logoImage}/>
      </View>

      <View style={styles.loginContentWrapper}>
        <CustomSingleTextField placeholder="username" />
        <CustomSingleTextField placeholder="password" />

        <TouchableOpacity
          onPress={() => goToHome(currentNavigatorUID)}
          style={styles.logInButton}
        >
          <CustomButton btnText="Log In" />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomWrapper}>
        <TouchableOpacity style={styles.logInButton}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Login;
