import React from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableWithoutFeedback
} from "react-native";

import CustomButton from "../../components/Buttons/CustomButton";
import { goToHome } from "../../lib/navigationHelpers";

import styles from "./styles";
import GeneralResult from "../../components/GeneralResult";
import ProjectResultSelection from "../../components/ProjectResultSelection";

const Results = ({ ResultTabs, changeTab }) => {
  let activeTab = null;
  if (ResultTabs === "general") {
    activeTab = <GeneralResult />;
  } else if (ResultTabs === "project") {
    activeTab = <ProjectResultSelection />;
  }

  return (
    <View style={styles.resultContainer}>
      <View>
        <TouchableWithoutFeedback onPress={() => changeTab("general")}>
          <View style={styles.generalTab}>
            <Text>General</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => changeTab("project")}>
          <View style={styles.projectTab}>
            <Text>Projects</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {activeTab}
    </View>
  );
};

export default Results;
