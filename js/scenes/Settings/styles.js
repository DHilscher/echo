import { StyleSheet } from "react-native";

import { colors, typography, textSizes, margins } from "../../config/styles";

export default StyleSheet.create({
  settingContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLightGreen
  },
  settingSection: {
    padding: margins.marginL
  },
  sectionTitle: {
    color: "white",
    fontSize: textSizes.title3,
    fontFamily: typography.fontHeavy,
    textAlign: "center",
    marginBottom: margins.marginL
  },
  userInformationSection: {
    backgroundColor: colors.mainGreen
  },
  notificationSection: {
    backgroundColor: colors.backgroundLightGreen
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: margins.marginS
  },
  optionText: {
    color: "white",
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontHeavy
  }
});
