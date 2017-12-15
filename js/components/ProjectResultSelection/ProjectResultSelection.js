import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../config/styles';
import CustomSquareButton from '../Buttons/CustomSquareButton'
import { goToRouteWithProps } from "../../lib/navigationHelpers";

const data = [
  { name: 'Juice Truck', title: 'comm', about: 'Fresh squeezed juice!' },
  { name: 'Google', title: 'typo', about: 'Your bestfriend' },
  { name: 'Givigi', title: 'comm', about: 'Is amazing' },
  { name: 'Livigi', title: 'typo', about: 'Is amazing' },
  { name: 'Zenith', title: 'pro', about: 'Is wonderful' },
  { name: 'Apple', title: 'pro', about: 'Does not have windows' },
  { name: 'Apple2', title: 'pro', about: 'Does not have windows' },
  { name: 'Apple3', title: 'pro', about: 'Does not have windows' },
  { name: 'Apple4', title: 'pro', about: 'Does not have windows' },
  { name: 'Apple5', title: 'pro', about: 'Does not have windows' },
]

const ProjectResultSelection = () => (

  <View style={styles.ProjectSelection}>
    <View style={styles.SelectionWhiteContainer}>

      {data.map((x) => 
        <TouchableOpacity key={x.name} activeOpacity={0.8} onPress={()=>goToRouteWithProps('singleResult', x)}>          
          <CustomSquareButton btnText={x.name}/>
        </TouchableOpacity>
      )}

    </View>
  </View>

);

export default ProjectResultSelection;