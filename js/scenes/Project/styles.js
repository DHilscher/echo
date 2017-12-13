import { StyleSheet } from "react-native";

import { typography } from "../../config/styles";

export default StyleSheet.create({
  containerP1: {
    backgroundColor: "#3C898E",
    height: "100%"
  },
  projectName: {
    alignSelf: "flex-start",
    fontSize: 18,
    color: "white",
    fontFamily: typography.fontMedium,
    marginHorizontal: "7.5%"
  },
  description: {
    alignSelf: "flex-start",
    fontSize: 18,
    color: "white",
    fontFamily: typography.fontMedium,
    marginHorizontal: "7.5%",
    marginBottom: "12%"
  },
  feedback: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    fontFamily: typography.fontMedium,
    marginHorizontal: "3.75%",
    marginBottom: "8%"
  },
  dayInput: {
    borderColor: "white",
    borderWidth: 1,
    color: "white",
    width: 38,
    height: 37,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20
  },
  monthInput: {
    borderColor: "white",
    borderWidth: 1,
    color: "white",
    width: 38,
    height: 37,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20
  },
  yearInput: {
    borderColor: "white",
    borderWidth: 1,
    width: 82,
    height: 37,
    color: "white",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20
  },
  nextButton: {
    marginBottom: "2.7%"
  },
  rocketImg: {
    alignSelf: "center",
    marginBottom: "2.7%",
    marginTop: "2.7%"
  },
  radioButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "2.7%"
  },
  radioText: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: typography.fontMedium,
    color: "white"
  },
  dateContainer: {
    flexDirection: "row",
    marginBottom: "8%",
    alignItems: "center",
    marginLeft: "7.5%",
    marginTop: "8%"
  },
  dateText: {
    fontSize: 25,
    fontFamily: typography.fontMedium,
    marginLeft: "2.5%",
    marginRight: "7.5%",
    color: "white"
  },
  textInput: {
    marginHorizontal: "3.75%",
    marginTop: "2.7%"
  }
});
