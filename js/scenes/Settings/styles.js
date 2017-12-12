import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export default StyleSheet.create({
  settingContainer:{
    flex: 1,
    backgroundColor: colors.backgroundLightGreen,
  },

  headerNavBar: {
    width: '100%',
    minHeight: 90,
  },
  pageTitleWrapper: {
    backgroundColor: colors.darkGreen,
    minHeight: 60,
    justifyContent: 'center',
    padding: margins.marginS,
  },
  pageTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: textSizes.title2,
    fontFamily: typography.fontBlack,
  },
  settingSection: {
    padding: margins.marginL,
  },
  sectionTitle: {
    color: 'white', 
    fontSize: textSizes.title3,
    fontFamily: typography.fontHeavy,
    textAlign: 'center',
    marginBottom: margins.marginL,
  },
  userInformationSection: {
    backgroundColor: colors.mainGreen,
  },
  notificationSection: {
    backgroundColor: colors.backgroundLightGreen,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: margins.marginS,
  },
  optionText: {
    color: 'white',
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontHeavy,
  },
})