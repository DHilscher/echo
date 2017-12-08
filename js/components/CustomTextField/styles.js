import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

const styles = StyleSheet.create({
  // Below is the styles for single text field
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
  // Below are the styles for text area 
  textAreaWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    padding: margins.marginM,
    margin: margins.marginM,
  },
  textAreaText: {
    fontFamily: typography.fontMedium,
    fontSize: textSizes.body,
    color: colors.darkGreen,
    height: 100,
  },

  // styles for signup form
  
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    color: '#262626',
    fontSize: 18,
    fontWeight: '200',
    flex: 1,
    height: 40
    },
    labelStyle: {
        fontSize: 12,
        color: '#7F7D7D',
        fontWeight: '200',
        flex: 1
    },
    containerStyle: {
        height: 45,
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        borderColor: '#D4D4D4',
        borderBottomWidth: 1,
    }
})

export default styles;