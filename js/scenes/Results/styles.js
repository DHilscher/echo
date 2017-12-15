import { StyleSheet } from "react-native";

import { colors, typography, textSizes, margins } from '../../config/styles';

export default StyleSheet.create({
  resultContainer: {
    height: '100%'
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

  resultSearch: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10
  },

  searchBar:{
    borderColor: colors.mainGreen,
    borderBottomWidth: 2,
    width: '80%',
    marginRight: 10
  },

  tabcontainer:{
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },

  generalTab: {
    backgroundColor: colors.mainGreen,
    height: 30,
    width: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  projectTab: {
    backgroundColor: colors.yellow,
    height: 30,
    width: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },

  tabtitle:{
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.bodyL,
    color: 'white'
  },

  singleTitle:{
    color: colors.red,
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.title2,
    textAlign: 'center',
    marginTop: margins.marginL,
    marginBottom: margins.marginS
  },

  singleAbout:{
    color: colors.mainGreen,
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.bodyL,
    textAlign: 'center',
    marginBottom: margins.marginL,
    marginTop: margins.marginS
  },

  evenSingleResult: {
    backgroundColor: colors.mainGreen,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 40,
    position: 'relative'
  },

  oddSingleResult: {
    backgroundColor: colors.darkGreen,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 40,
    position: 'relative'
  },

  index:{
    backgroundColor: colors.red,
    borderRadius: 20,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40
  },

  number: {
    fontFamily: typography.fontBlack,
    fontSize: textSizes.bodyL,
    color: 'white',
  },

  resultname:{
    color: 'white',
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.bodyL
  },
});
