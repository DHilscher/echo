import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../../config/styles';

const styles = StyleSheet.create({
  squareWrapper: {
    width: 90,
    height: 90,
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    borderRadius: 15,
    padding: margins.marginS,
    marginHorizontal: margins.marginS/2,
    marginBottom: margins.marginM,
  },
  squareButtonText: {
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.body,
    color: 'white',
    textAlign: 'center',
  }
})

export default styles;