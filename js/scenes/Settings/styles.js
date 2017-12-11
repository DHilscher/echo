import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export default StyleSheet.create({
  settingContainer:{
    flex: 1,
    backgroundColor: colors.backgroundLightGreen,
  },

  headerNavBar: {
    width: '100%',
    minHeight: 90,
  },
  pageTitleWrapper: {
    backgroundColor: colors.darkGreen,
    minHeight: 60,
    justifyContent: 'center',
    padding: margins.marginS,
  },
  pageTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: textSizes.title2,
    fontFamily: typography.fontBlack,
  },
  settingSection: {
    padding: margins.marginL,
  },
  sectionTitle: {
    color: 'white', 
    fontSize: textSizes.title3,
    fontFamily: typography.fontHeavy,
    textAlign: 'center',
    marginBottom: margins.marginL,
  },
  userInformationSection: {
    backgroundColor: colors.mainGreen,
  },
  notificationSection: {
    backgroundColor: colors.backgroundLightGreen,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: margins.marginS,
  },
  optionText: {
    color: 'white',
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontHeavy,
  },


  

  // titleDividerText:{
  //   color: 'white',
  //   fontSize: 20,
  //   fontWeight: 'bold'
  // },

  // userInformationSection:{
  //   // height: 280,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   
  // },

  // userInformationTitle:{
  //   color: 'white',
  //   fontSize: 18,
  //   fontWeight: 'bold'
  // },

  // userInformationOptionsContainer:{
  //   // height: 200,
  //   width: '100%',
  //   justifyContent: 'space-between',
  //   padding: 30,
  //   // backgroundColor: 'pink'
  // },

  // singleUserOptionContainer:{
  //   justifyContent: 'flex-start',
  //   position: 'relative',
  //   backgroundColor: 'red'
  // },

  // userOptionText:{
  //   color: 'white',
  //   fontSize: 16
  // },

  // notificationSection:{
  //   // height: 235, 
  //   alignItems: 'center', 
  //   justifyContent: 'center',
  //   backgroundColor: colors.backgroundLightGreen,
  // },

  // notificationTitle:{
  //   color: 'white', 
  //   fontSize: 18, 
  //   fontWeight: 'bold'
  // },

  // button:{
  //   backgroundColor: 'orange', 
  //   width: 100, 
  //   height: 40, 
  //   borderRadius: 20, 
  //   justifyContent: 'center', 
  //   alignItems: 'center', 
  //   position: 'absolute', 
  //   right: 0, 
  //   top: -10
  // },


  
})