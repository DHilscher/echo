import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

const styles = StyleSheet.create({
  ProjectSelection: {
    backgroundColor: 'orange', 
    padding: 20
  },

  SelectionWhiteContainer:{ 
    backgroundColor: 'white',
    height: 520, width:'100%',
    borderRadius: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
    padding: 10
  },

  orangeSquare:{
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems:'center'
  },

  boxTitle:{
    fontSize: 20,
    width: 'auto'
  }

});
export default styles;