import { StyleSheet } from "react-native";

import { typography, colors } from "../../config/styles";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.backgroundLightGreen,
    height: "100%"
  },
  projectName: {
    alignSelf: "flex-start",
    fontSize: 18
  },
  description: {
    alignSelf: "flex-start",
    fontSize: 18
  },
  feedback: {
    fontSize: 24,
    textAlign: "center"
  },
  projectNameInput: {
    width: "100%"
  },
  descriptionInput: {
    width: "100%"
  },
  image: {
    marginTop: "20%",
    marginBottom: "10%"
  },
  successText: {
    fontSize: 24,
    color: "white",
    marginHorizontal: "16.5%",
    textAlign: "center",
    fontFamily: typography.fontHeavy,
    marginBottom: "10%"
  },
  homeButton: {
    marginBottom: "10%"
  }
});
