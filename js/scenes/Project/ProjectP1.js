import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import CustomButton from "../../components/Buttons/CustomButton";
import { goToHome } from "../../lib/navigationHelpers";

import styles from "./styles";

const ProjectP1 = ({ currentNavigatorUID, index }) => {
  console.log(index);
  return (
    <View style={styles.containerP1}>
      <TextInput style={styles.projectNameInput} placeholder="" />
      <Text style={styles.projectName}>Project Name</Text>
      <TextInput style={styles.descriptionInput} placeholder="" />
      <Text style={styles.description}>Description</Text>
      <Text style={styles.feedback}>
        Would you like to set a reminder to request feedback?
      </Text>
      <Icon color="white" name="ios-radio-button-on" size={30} />
      <Text>Yes</Text>
      <Icon color="white" name="ios-radio-button-on" size={30} />
      <Text>No</Text>
      <TextInput style={styles.dayInput} placeholder="" />
      <Text>D</Text>
      <TextInput style={styles.monthInput} placeholder="" />
      <Text>M</Text>
      <TextInput style={styles.yearInput} placeholder="" />
      <Text>Y</Text>
      <TouchableOpacity onPress={() => index()} style={styles.nextButton}>
        <CustomButton btnText="Next" />
      </TouchableOpacity>
    </View>
  );
};

export default ProjectP1;
