import React from "react";
import { Text, View, TextInput } from "react-native";

import CustomButton from "../../components/CustomButton";
import { goToHome } from "../../lib/navigationHelpers";

import styles from "./styles";

const SendForm = () => {
  return (
    <View style={styles.sendformContainer}>

      <View style={styles.logoContainer}><Text>echo</Text></View>
      <View style={styles.sendformTitle}><Text>Send form</Text></View>
      <View style={styles.sendformMessage}><Text>Customize your message below!</Text></View>
      <TextInput multiline={true} />
      <CustomButton btnText={'Next'} />
      
    </View>
  );
};

export default SendForm;
