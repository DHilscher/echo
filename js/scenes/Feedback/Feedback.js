import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import { goToRoute } from "../../lib/navigationHelpers";
import Separator from "../../components/Separator";
import NavigationBar from "../../components/NavigationBar";
import CustomFullWidthButton from "../../components/Buttons/CustomFullWidthButton";

const Feedback = ({}) => {
  return (
    <ScrollView>
      <NavigationBar pageTitle="Feedback"/>

      <View style={styles.questionWrapper}>
        <Text style={styles.questionText}>
          What type of feedback are you looking for?
        </Text>
      </View>

      <TouchableOpacity onPress={() => goToRoute("projectFeedback")} activeOpacity={0.7}>
        <CustomFullWidthButton btnText="Project based feedback"/>
      </TouchableOpacity>

      <Separator />

      <TouchableOpacity onPress={() => goToRoute("createForm")} activeOpacity={0.7}>
        <CustomFullWidthButton btnText="General feedback"/>
      </TouchableOpacity>

      <View style={styles.feedbackImage}>
        <Image
          source={require("../../assets/images/survey/ask.png")}
          resizeMode="contain" />
      </View>
    </ScrollView>
  );
};

export default Feedback;
