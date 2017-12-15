import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../config/styles';

const data = [
  { name: 'Olivia', title: 'Communication', date: '03/21/2017' },
  { name: 'Jeremy', title: 'Typography', date: '03/19/2017' },
  { name: 'Bernie', title: 'Communication', date: '03/17/2017' },
  { name: 'Alex', title: 'Typography', date: '03/15/2017' },
  { name: 'Liza', title: 'Professionalism', date: '03/12/2017' },
]

let key = 0

const GeneralResult = () => (

  data.map((x, idx) => 
    <View key={idx} style={ idx%2==0 ? styles.evengeneralResult : styles.oddgeneralResult }>

      <Text style={styles.resultname}>{x.name}</Text>

      <View style={styles.datetitle}>
        <Text style={styles.resulttitle}>{x.title}</Text>
        <Text style={styles.resulttitle}>{x.date}</Text>
      </View>
      
    </View>
  )

);

export default GeneralResult;