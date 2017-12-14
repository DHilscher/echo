import { StyleSheet } from "react-native";

import { colors, typography, textSizes, margins } from '../../config/styles';

export default StyleSheet.create({
  answerContainer: {
    height: '100%',
    backgroundColor: colors.mainGreen
  },

  titlecontainer:{
    backgroundColor: colors.darkGreen,
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  scenetitle:{
    fontSize: textSizes.title3,
    fontFamily: typography.fontBlack,
    color: 'white'
  },

  answerCollection:{
    backgroundColor: colors.mainGreen,
    padding: margins.marginL
  },

  singleQnA:{
    position: 'relative',
    paddingLeft: 60,
    marginBottom: margins.marginL + margins.marginL
  },

  index:{
    backgroundColor: colors.red,
    borderRadius: 20,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 10
  },

  number: {
    fontFamily: typography.fontBlack,
    fontSize: textSizes.bodyL,
    color: 'white',
  },

  question:{
    color: colors.darkGreen,
    fontFamily: typography.fontBlack,
    fontSize: textSizes.bodyS,
    marginBottom: margins.marginM
  },

  longAnswer:{
    color: 'white',
    fontFamily: typography.fontMedium,
    fontSize: textSizes.bodyS
  },

  shortAnswer:{
    color: 'white',
    fontFamily: typography.fontBlack,
    fontSize: textSizes.title2
  },

  scale:{
    color: 'white',
    width: '100%',
    fontFamily: typography.fontBlack,
    fontSize: textSizes.title2,
    paddingLeft: 80,
    marginBottom: margins.marginM
  }

});
