import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../../config/styles';

const styles = StyleSheet.create({
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