import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

const styles = StyleSheet.create({
  onboardingWrapper: {
    backgroundColor: colors.lightestGreen,
    flex: 1,
    paddingBottom: margins.marginL,
  },
  stepIndicatorWrapper: {
    marginTop: 50,
    flex: 1,
  },
  onboardingContentWrapper: {
    flex: 6,
    alignItems: "center",
  },
  onboardingText: {
    color: "white",
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.title2,
    textAlign: "center",
    backgroundColor: "transparent",
    marginHorizontal: margins.marginL * 2,
    marginBottom: margins.marginM,
  },
  onboardingImage1: {
    marginTop: 50,
  },
  onboardingImage2: {
    marginTop: 50,
  },
  onboardingImage3: {
    marginTop: 0,
  },
  ButtonWrapper: {
    flex: 1.5,
  },
  arrowButton: {
    alignItems: "center",
  },
  skipText: {
    fontSize: textSizes.bodyL,
    color: colors.red,
    fontFamily: typography.fontHeavy,
    textAlign: "right",
    marginRight: margins.marginL,
  },
  onboarding4Wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  onboarding4Text: {
    color: "white",
    fontFamily: typography.fontBlack,
    fontSize: textSizes.title1,
    textAlign: "center",
    backgroundColor: "transparent",
    margin: margins.marginL,
  },
  onboardingImage4: {
    position: "absolute",
    top: 0,  
  }
});

export default styles;
