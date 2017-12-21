import React, { Component } from "react";
import { KeyboardAvoidingView, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import { goToRoute } from "../../lib/navigationHelpers";
import AddButton from "../../components/Buttons/AddButton";
import { colors } from "../../config/styles";

const CreateFormStep1 = ({ handleFormTitle }) => {
  return (
    <KeyboardAvoidingView style={styles.feedbackContainer}>
      <View style={styles.headerNavBarWrapper}>
        <Image
          style={styles.headerNavBar}
          source={require("../../assets/images/main-nav-bar.png")}
        />
      </View>
      <View style={styles.pageTitleWrapper}>
        <TextInput
          placeholder="Name your form"
          placeholderTextColor={colors.lightestGreen}
          selectionColor={colors.yellow}
          clearButtonMode="while-editing"
          autoFocus={true}
          autoCorrect={false}
          onChangeText={text => handleFormTitle(text)}
          style={styles.textFieldText}
        />
      </View>

      <View style={styles.questionWrapper}>
        <Text style={styles.questionText}>
          Start getting the answers you need.
        </Text>
        <Text style={styles.questionText}>Add a question to get started.</Text>
      </View>

      <View>
        <View style={styles.addButtonContainer}>
          <View style={styles.mainGreenView} />
          <View style={styles.lightGreenView} />
        </View>
        <TouchableOpacity
          onPress={() => goToRoute("survey")}
          activeOpacity={0.7}
        >
          <View style={styles.addButtonWrapper}>
            <AddButton />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.surveyImage}>
        <Image
          source={require("../../assets/images/survey/survey-items.png")}
          resizeMode="contain"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateFormStep1;
