import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../../config/styles';

const styles = StyleSheet.create({
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
})

export default styles;