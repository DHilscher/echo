import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

const styles = StyleSheet.create({
  survey: {
    flex: 0,
    backgroundColor: "#FFFFFF80",
    opacity: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
    marginVertical: margins.marginS,
    marginRight: margins.marginS,
    marginLeft: margins.marginM,
    paddingLeft: margins.marginS
  },

  index:{
    backgroundColor: colors.red,
    borderRadius: 20,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: -10
  },

  number: {
    fontFamily: typography.fontBlack,
    fontSize: textSizes.bodyL,
    color: 'white',
  },

  question: {
    fontFamily: typography.fontBlack,
    fontSize: textSizes.bodyL,
    color: 'white',
    marginTop: margins.marginM,
    marginBottom: margins.marginS,
    marginHorizontal: margins.marginL + margins.marginL,
  },

  type: {
    fontFamily: typography.fontMedium,
    fontSize: textSizes.bodyS,
    color: 'white',
    marginTop: margins.marginS,
    marginBottom: margins.marginM,
    marginHorizontal: margins.marginL + margins.marginL,
  },

  close: {
    fontSize: 40,
    color: colors.red,
  },

  closeButton: {
    position: 'absolute',
    right: 10,
    top: 0
  },

});

export default styles;