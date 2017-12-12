import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import Separator from "../../components/Separator";
import { goToRoute } from "../../lib/navigationHelpers";

const Feedback = ({}) => {
  return (
    <View>
      <View>
        <Image
          style={styles.headerNavBar}
          source={require("../../assets/images/main-nav-bar.png")}
        />
      </View>
      <View style={styles.pageTitleWrapper}>
        <Text style={styles.pageTitle}>Feedback</Text>
      </View>

      <View style={styles.questionWrapper}>
        <Text style={styles.questionText}>
          What type of feedback are you looking for?
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => goToRoute("projectFeedback")}
        activeOpacity={0.7}
        style={styles.optionWrapper}
      >
        <Text style={styles.optionText}>Project based feedback</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        onPress={() => goToRoute("createForm")}
        activeOpacity={0.7}
        style={styles.optionWrapper}
      >
        <Text style={styles.optionText}>General feedback</Text>
      </TouchableOpacity>

      <View>
        <Image
          style={styles.feedbackImage}
          source={require("../../assets/images/survey/ask.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Feedback;
