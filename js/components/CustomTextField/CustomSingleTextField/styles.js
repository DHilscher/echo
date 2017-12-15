import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../../config/styles';

const styles = StyleSheet.create({
  textFieldWrapper: {
    margin: margins.marginM,
  },
  textFieldText: {
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.bodyL,
    textAlign: 'center',
    color: colors.darkGreen,
    marginBottom: margins.marginS,
    height: 40,
    borderColor: 'white',
    borderBottomWidth: 3,
  },
  hintText: {
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.bodyS,
    textAlign: 'center',
    color: 'white',
  },

})

export default styles;