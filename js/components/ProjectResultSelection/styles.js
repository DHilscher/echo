import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

const styles = StyleSheet.create({
  ProjectSelection: {
    backgroundColor: colors.yellow,
    padding: 20,
    height: '100%'
  },

  SelectionWhiteContainer:{
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
    padding: 10
  }

});
export default styles;