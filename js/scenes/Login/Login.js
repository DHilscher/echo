import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import CustomButton from "../../components/Buttons/CustomButton";
import { goToHome } from "../../lib/navigationHelpers";

import styles from "./styles";

const Login = ({ currentNavigatorUID }) => {
  console.log(currentNavigatorUID);

  return (
    <View style={styles.container}>
      <View style={styles.echoContainer}>
        <Text style={styles.title}>echo</Text>
      </View>
      <View>
        <TextInput style={styles.usernameInput} placeholder="username" />
      </View>
      <View>
        <TextInput style={styles.passwordInput} placeholder="password" />
      </View>
      <TouchableOpacity
        onPress={() => goToHome(currentNavigatorUID)}
        style={styles.logInButton}
      >
        <CustomButton btnText="Log In" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.logInButton}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
