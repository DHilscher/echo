import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { goToRoute } from "../../lib/navigationHelpers";

import styles from "./styles";

const Home = ({ fullname }) => (
  <View style={styles.homeWrapper}>
    <View style={styles.headerWrapper}>
      <Image source={require("../../assets/images/home-nav-bar.png")} />
    </View>

    <View style={styles.headerTextWrapper}>
      <Text style={styles.headerText}>Hello, {fullname}!</Text>
    </View>

    <TouchableOpacity
      onPress={() => goToRoute("feedback")}
      style={styles.feedbackWrapper}
    >
      <Image
        style={styles.navImage}
        source={require("../../assets/images/home/feedback-bg.png")}
      />
      <View style={styles.navTextWrapper}>
        <Text style={styles.navText}>Ask for feedback</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => goToRoute("project")}
      style={styles.projectWrapper}
    >
      <Image
        style={styles.navImage}
        source={require("../../assets/images/home/project-bg.png")}
      />
      <View style={styles.navTextWrapper}>
        <Text style={styles.navText}>Add projects</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => goToRoute("results")}
      style={styles.resultWrapper}
    >
      <Image
        style={styles.navImage}
        source={require("../../assets/images/home/results-bg.png")}
      />
      <View style={styles.navTextWrapper}>
        <Text style={styles.navText}>Results</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => goToRoute("settings")}
      style={styles.settingWrapper}
    >
      <Image
        style={styles.navImage}
        source={require("../../assets/images/home/settings-bg.png")}
      />
      <View style={styles.navTextWrapper}>
        <Text style={styles.navText}>Settings</Text>
      </View>
    </TouchableOpacity>
  </View>
);

Home.propTypes = {};

export default Home;
