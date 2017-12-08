import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

const styles = StyleSheet.create({
  // Below is the styles for single text field
  textFieldText: {
    fontFamily: typography.fontMedium,
    fontSize: textSizes.bodyL,
    textAlign: 'center',
    color: colors.darkGreen,
    margin: margins.marginM,
    height: 40,
    borderColor: colors.lightestGreen,
    borderBottomWidth: 3,
  },
  // Below are the styles for text area 
  textAreaWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    padding: margins.marginM,
    margin: margins.marginM,
  },
  textAreaText: {
    fontFamily: typography.fontMedium,
    fontSize: textSizes.body,
    color: colors.darkGreen,
    height: 100,
  }
})

export default styles;