import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export const styles = StyleSheet.create({
  headerNavBarWrapper: {
    alignItems: 'center',
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
    fontFamily: typography.fontHeavy,
  },
})

export default styles;