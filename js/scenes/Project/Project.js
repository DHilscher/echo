import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import CustomButton from "../../components/Buttons/CustomButton";
import CustomSingleTextField from "../../components/CustomTextField/CustomSingleTextField";
import CustomTextAreaSmall from "../../components/CustomTextField/CustomTextAreaSmall";
import NavigationBar from "../../components/NavigationBar";
import styles from "./styles";

const Project = ({
  projectTitle,
  projectDesc,
  handleProjectAdded,
  handleChange,
  handleChange2,
  showReminder,
  handleReminder
}) => {
  return (
    <ScrollView>
        <NavigationBar pageTitle="New Project" />
        <KeyboardAvoidingView>
          <View style={styles.containerP1}>
            <View style={styles.textInput}>
              <CustomSingleTextField placeholder={""} handler={handleChange} />
            </View>
            <Text style={styles.projectName}>Project Name</Text>
            <View style={styles.textInput}>
              <CustomTextAreaSmall placeholder={""} handler={handleChange2} />
            </View>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.feedback}>
              Would you like to set a reminder to request feedback?
            </Text>
            <View style={styles.radioButtonContainer}>
              <View>
                <Icon
                  onPress={() => handleReminder()}
                  color="white"
                  name={
                    showReminder === false ? (
                      "ios-radio-button-off"
                    ) : (
                      "ios-radio-button-on"
                    )
                  }
                  size={30}
                />
                <Text style={styles.radioText}>Yes</Text>
              </View>
              <View>
                <Icon
                  onPress={() => handleReminder()}
                  color="white"
                  name={
                    showReminder === false ? (
                      "ios-radio-button-on"
                    ) : (
                      "ios-radio-button-off"
                    )
                  }
                  size={30}
                />
                <Text style={styles.radioText}>No</Text>
              </View>
            </View>
            {showReminder === true ? (
              <View>
                <View style={styles.dateContainer}>
                  <TextInput style={styles.dayInput} maxLength={2} placeholder="" />
                  <Text style={styles.dateText}>D</Text>
                  <TextInput
                    style={styles.monthInput}
                    maxLength={2}
                    placeholder=""
                  />
                  <Text style={styles.dateText}>M</Text>
                  <TextInput
                    style={styles.yearInput}
                    maxLength={4}
                    placeholder=""
                  />
                  <Text style={styles.dateText}>Y</Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleProjectAdded(projectTitle, projectDesc)}
                  style={styles.nextButton}
                >
                  <CustomButton btnText="Add" />
                </TouchableOpacity>
                <View style={styles.rocketImg}>
                  <Image source={require("../../assets/images/icon-rocket.png")} />
                </View>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => handleProjectAdded(projectTitle, projectDesc)}
                style={styles.nextButton}
              >
                <CustomButton btnText="Next" />
              </TouchableOpacity>
            )}
          </View>
        </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Project;
