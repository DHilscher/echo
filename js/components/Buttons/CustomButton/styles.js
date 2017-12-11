import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../../config/styles';

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
  },
  button: {
    flex: 0,
    backgroundColor: colors.red,
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: typography.fontBlack,
    fontSize: textSizes.bodyL,
    color: 'white',
    textAlign: 'center',
    marginVertical: margins.marginS,
    marginHorizontal: margins.marginL + margins.marginL,
  },
});

export default styles;