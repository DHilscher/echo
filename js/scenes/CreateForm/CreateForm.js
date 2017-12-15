import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import AddButton from "../../components/Buttons/AddButton";
import { colors } from "../../config/styles";

const CreateFormStep1 = ({handleInputChange}) => {
  return (
    <View style={styles.feedbackContainer}>
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
          onChangeText={(text) => handleInputChange(text)}
          style={styles.textFieldText} />
      </View>

      <View style={styles.questionWrapper}>
        <Text style={styles.questionText}>
          Start getting the answers you need.
        </Text>
        <Text style={styles.questionText}>
          Add a question to get started.
        </Text>
      </View>

      <View>
        <View style={styles.addButtonContainer}>
          <View style={styles.mainGreenView}></View>
          <View style={styles.lightGreenView}></View>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.addButtonWrapper}>
            <AddButton />
          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.surveyImage}>
        <Image
          source={require("../../assets/images/survey/survey-items.png")}
          resizeMode="contain" />
      </View>

    </View>
  )
}

export default CreateFormStep1 