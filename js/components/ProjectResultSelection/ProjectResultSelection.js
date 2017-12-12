import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../config/styles';

const data = [
  { name: 'Juice Truck', title: 'comm' },
  { name: 'Google', title: 'typo' },
  { name: 'Givigi', title: 'comm' },
  { name: 'Livigi', title: 'typo' },
  { name: 'Zenith', title: 'pro' },
  { name: 'Apple', title: 'pro' },
]

const ProjectResultSelection = () => (

  <View style={styles.ProjectSelection}>
    <View style={styles.SelectionWhiteContainer}>

      {data.map(x => 
        <View key={x.name} style={styles.orangeSquare}><Text style={styles.boxTitle}>{x.name}</Text></View>
      )}

    </View>
  </View>

);

export default ProjectResultSelection;