import React from "react";
import { Text, View, TextInput } from "react-native";

import CustomButton from "../../components/CustomButton";
import { goToHome } from "../../lib/navigationHelpers";

import styles from "./styles";

const SendEmail = () => {
  return (
    <View style={styles.sendformContainer}>

      <View style={styles.logoContainer}><Text>echo</Text></View>

      <View style={styles.sendformTitle}><Text>Send form</Text></View>

      <TextInput />
      <Text>Recipient Name</Text>

      <TextInput />
      <Text>Email</Text>

      <Text>Customize recipient message</Text>

      <Text>Add another recipient</Text>
      
      <CustomButton btnText={'Send'} />
      
    </View>
  );
};

export default SendEmail
