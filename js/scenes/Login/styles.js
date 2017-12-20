import { StyleSheet, Dimensions } from "react-native";

import { colors, typography, textSizes, margins } from '../../config/styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLightGreen,
    paddingBottom: margins.marginL,
  },
  loginHeaderWrapper: {
    flex: 6,
    alignItems: "center",
    width: windowWidth,
  },
  loginHeaderImage: {
    width: windowWidth,
  },
  loginContentWrapper: {
    flex: 4,
    paddingHorizontal: margins.marginL + margins.marginL,
  },
  logInButton: {
    marginTop: margins.marginL,
  },
  bottomWrapper: {
    flex: 0.1,
    margin: margins.marginL,
  },
  textButton: {
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontHeavy,
    color: "white",
  },
});
