import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomSingleTextField from "../../components/CustomTextField/CustomSingleTextField";

import { goToRoute } from "../../lib/navigationHelpers";

import styles from "./styles";

const Login = ({ currentNavigatorUID, handleSubmit, email, password }) => {
  return (
    <View style={styles.container}>
      <View style={styles.loginHeaderWrapper}>
        <Image source={require("../../assets/images/login/login-items.png")} />
        <Image
          source={require("../../assets/images/echo-logo-white.png")}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.loginContentWrapper}>
        <CustomSingleTextField placeholder="email" />
        <CustomSingleTextField placeholder="password" />

        <TouchableOpacity
          onPress={() => goToRoute("home")}
          style={styles.logInButton}
        >
          <CustomButton btnText="Log In" />
        </TouchableOpacity>
      </View>

    return (
      <View style={styles.container}>
        <View style={styles.loginHeaderWrapper}>
          <Image source={require("../../assets/images/login/login-items.png")} />
          <Image
            source={require("../../assets/images/echo-logo-white.png")}
            style={styles.logoImage}
          />
        </View>
  
        <View style={styles.loginContentWrapper}>
          <CustomSingleTextField placeholder="username" handler={email} />
          <CustomSingleTextField placeholder="password" handler={password} />
  
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.logInButton}
          >
            <CustomButton btnText="Log In" />
          </TouchableOpacity>
        </View>
  
        <View style={styles.bottomWrapper}>
          <TouchableOpacity onPress={() => goToRoute("register")}>
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default Login;