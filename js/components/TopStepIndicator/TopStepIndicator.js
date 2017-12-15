import React from "react";
import StepIndicator from "react-native-step-indicator";

import { colors } from "../../config/styles";

const topIndicatorStyles = {
  stepIndicatorSize: 18,
  currentStepIndicatorSize: 23,
  separatorStrokeWidth: 4,
  currentStepStrokeWidth: 4,
  stepStrokeCurrentColor: colors.red,
  stepStrokeWidth: 4,
  stepStrokeFinishedColor: colors.red,
  stepStrokeUnFinishedColor: colors.red,
  separatorFinishedColor: colors.red,
  separatorUnFinishedColor: colors.red,
  stepIndicatorFinishedColor: colors.lightestGreen,
  stepIndicatorUnFinishedColor: colors.lightestGreen,
  stepIndicatorCurrentColor: colors.red,
  stepIndicatorLabelFontSize: 1,
  currentStepIndicatorLabelFontSize: 1,
  stepIndicatorLabelCurrentColor: "transparent",
  stepIndicatorLabelFinishedColor: "transparent",
  stepIndicatorLabelUnFinishedColor: "transparent",
  labelColor: "transparent",
  labelSize: 1,
  currentStepLabelColor: "transparent"
};

const TopStepIndicator = ({ stepCount, currentPosition }) => (
  <StepIndicator
    stepCount={stepCount}
    customStyles={topIndicatorStyles}
    currentPosition={currentPosition}
  />
);

export default TopStepIndicator;