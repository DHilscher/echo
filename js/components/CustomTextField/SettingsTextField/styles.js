import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../../config/styles';

const styles = StyleSheet.create({
  textFieldWrapper: {
    marginBottom: margins.marginM,
  },
  textFieldText: {
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.bodyL,
    color: 'white',
    marginBottom: margins.marginS,
    height: 40,
    borderColor: colors.lightestGreen,
    borderBottomWidth: 3,
  },
});

export default styles;