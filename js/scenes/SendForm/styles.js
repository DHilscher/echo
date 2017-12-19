import { StyleSheet } from "react-native";

import { colors, typography, textSizes, margins } from '../../config/styles';

export default StyleSheet.create({
  sendFormContainer: {
    height: "100%",
    backgroundColor: colors.backgroundLightGreen,
  }, 
  questionWrapper: {
    backgroundColor: colors.mainGreen,
    justifyContent: 'center',
    padding: margins.marginL,
  },
  questionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: textSizes.title3,
    fontFamily: typography.fontHeavy,
  },
  messageWrapper: {
    backgroundColor: colors.backgroundLightGreen,
  },

  sendEmailContentWrapper: {
    marginTop: margins.marginL,
  },
  optionsContainer: {
    margin: margins.marginL,
  },
  optionWrapper: {
    marginBottom: margins.marginM,
  },
  optionContentWrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontMedium,
    marginLeft: margins.marginM,
  },

  sentRecipientWrapper: {
    backgroundColor: colors.lightYellow,
    paddingVertical: margins.marginS,
    paddingHorizontal: margins.marginL,
  },
  sentRecipientCenter: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sentRecipientText: {
    color: colors.red,
    fontSize: textSizes.body,
    fontFamily: typography.fontMedium,
  }
});
