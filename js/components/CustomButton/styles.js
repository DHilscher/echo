import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

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
    marginTop: margins.marginS,
    marginBottom: margins.marginS,
    marginLeft: margins.marginL,
    marginRight: margins.marginL,
  }
});

export default styles;