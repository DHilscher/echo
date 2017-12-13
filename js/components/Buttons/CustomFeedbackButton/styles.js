import { StyleSheet } from "react-native";

import { colors, typography, textSizes, margins } from "../../../config/styles";

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "center"
  },
  button: {
    flex: 0,
    backgroundColor: colors.red,
    borderRadius: 50
  },
  buttonText: {
    fontFamily: typography.fontBlack,
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginVertical: margins.marginS,
    marginHorizontal: 10
  }
});

export default styles;
