import { StyleSheet } from "react-native";

import { colors, typography, textSizes, margins } from '../../config/styles';

export default StyleSheet.create({
  container: {
    // height: "100%",
    // flex: 1,
    backgroundColor: colors.backgroundLightGreen,
    paddingBottom: margins.marginL,
  },
  loginHeaderWrapper: {
    alignItems: "center",
  },
  logoImage: {
    marginTop: margins.marginL + margins.marginL,
    marginBottom: margins.marginL,
  },
  loginContentWrapper: {
    paddingHorizontal: margins.marginL + margins.marginL,
  },
  logInButton: {
    marginTop: margins.marginL,
  },
  bottomWrapper: {
    position: "absolute",
    bottom: 0,
    margin: margins.marginL,
  },
  textButton: {
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontHeavy,
    color: "white",
  },
});
