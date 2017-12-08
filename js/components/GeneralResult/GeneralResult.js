import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../config/styles';

const data = [
  { name: 'olivia', title: 'comm' },
  { name: 'jeremy', title: 'typo' },
  { name: 'bernie', title: 'comm' },
  { name: 'alex', title: 'typo' },
  { name: 'liza', title: 'pro' },
]

let key = 0

const GeneralResult = () => (

  data.map(x => 
    <View key={key++} style={styles.generalResult}>
      <Text>{x.name}</Text>
      <Text>{x.title}</Text>
    </View>
  )

);

export default GeneralResult;