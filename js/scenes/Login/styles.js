import { StyleSheet } from "react-native";

import { colors, typography, textSizes, margins } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLightGreen,
    paddingBottom: margins.marginL,
  },
  loginHeaderWrapper: {
    flex: 6,
    alignItems: "center",
  },
  logoImage: {
    marginTop: margins.marginL + margins.marginL,
    marginBottom: margins.marginL,
  },
  loginContentWrapper: {
    flex: 4,
    paddingHorizontal: margins.marginL + margins.marginL,
  },
  logInButton: {
    marginTop: margins.marginL,
  },
  bottomWrapper: {
    // position: "absolute",
    // bottom: 0,
    flex: 0.1,
    margin: margins.marginL,
  },
  textButton: {
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontHeavy,
    color: "white",
  },
});
