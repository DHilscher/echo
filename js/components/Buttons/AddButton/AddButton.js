import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { colors } from '../../../config/styles';

const AddButton = () => (
  <View style={styles.addButtonWrapper}>
    <Icon name="ios-add-circle" size={90} color={colors.red} />
    <Icon name="ios-add" size={90} color="white" style={styles.addButtonWhite}/>
  </View>
);

export default AddButton;