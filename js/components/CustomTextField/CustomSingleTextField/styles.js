import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../../config/styles';

const styles = StyleSheet.create({
  textFieldText: {
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.bodyL,
    textAlign: 'center',
    color: colors.darkGreen,
    margin: margins.marginM,
    height: 40,
    borderColor: 'white',
    borderBottomWidth: 3,
  },
})

export default styles;