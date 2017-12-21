import React from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import styles from "./styles";
import { goToRoute } from "../../lib/navigationHelpers";
import CustomButton from "../../components/Buttons/CustomButton";
import CustomTextArea from "../../components/CustomTextField/CustomTextArea";
import NavigationBar from "../../components/NavigationBar";



const SendMessage = () => {

  handleEmailMessage = value => {
    console.log(value)
  };

  return (
    <ScrollView style={styles.sendFormContainer}>

      <NavigationBar pageTitle="Send Form"/>

      <View style={styles.questionWrapper}>
        <Text style={styles.questionText}>Customize your message below!</Text>
      </View>

      <View style={styles.messageWrapper}>

        <CustomTextArea 
          handler={this.handleEmailMessage}
          defaultValue={`Hi, it’s Jenny! 
          
I was wondering if you had some time to fill out a quick feedback form so I can know how I am performing, so I can keep growing. 

Thanks so much for your time.`}
          />

          <TouchableOpacity activeOpacity={0.7} onPress={() => goToRoute("sendEmail")}>
            <CustomButton btnText={'Next'} />
          </TouchableOpacity>

      </View>
      
    </ScrollView>
  );
};

export default SendMessage;
