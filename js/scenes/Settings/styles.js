import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  // Black background
  settingContainer:{
    width: '100%'
  },

  logoContainer:{
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },

  titleDivider:{
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple'
  },

  titleDividerText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  userInformationSection:{
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },

  userInformationTitle:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },

  userInformationOptionsContainer:{
    height: 200,
    width: '100%',
    justifyContent: 'space-between',
    padding: 30,
    backgroundColor: 'pink'
  },

  singleUserOptionContainer:{
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: 'red'
  },

  userOptionText:{
    color: 'white',
    fontSize: 16
  },

  notificationSection:{
    height: 235, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'blue'
  },

  notificationTitle:{
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold'
  },

  button:{
    backgroundColor: 'orange', 
    width: 100, 
    height: 40, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    right: 0, 
    top: -10
  }
})