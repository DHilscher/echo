import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

const styles = StyleSheet.create({
  evengeneralResult: {
    backgroundColor: colors.mainGreen,
    height: 60,
    flexDirection:'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40
  },

  oddgeneralResult: {
    backgroundColor: colors.lightestGreen,
    height: 60,
    flexDirection:'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40
  },

  resultname:{
    color: 'white',
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.bodyL
  },

  resulttitle:{
    color: 'white',
    fontFamily: typography.fontMedium,
    fontSize: 14,
  },

  datetitle:{
    width: 130
  }
});
export default styles;