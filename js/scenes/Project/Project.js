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
  handleChange2
}) => {
  return (
    <ScrollView>
      <NavigationBar pageTitle="New Project" />
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.containerP1}>
          <View style={styles.textInput}>
            <CustomSingleTextField placeholder={""} handler={handleChange} />
          </View>
          <Text style={styles.projectName}>Project Name</Text>
          <View style={styles.textInput}>
            <CustomTextAreaSmall placeholder={""} handler={handleChange2} />
          </View>
          <Text style={styles.description}>Description</Text>

          <TouchableOpacity
            onPress={() => handleProjectAdded(projectTitle, projectDesc)}
            style={styles.nextButton}
          >
            <CustomButton btnText="Next" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Project;
