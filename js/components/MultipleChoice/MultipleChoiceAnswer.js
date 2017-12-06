import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CustomButton from '../CustomButton'

const MultipleChoice = () => (

  <View>
    <View style={styles.logoContainer}><Text>ECHO</Text></View>
    <View style={styles.feedbacktitle}><Text>End of Proj. Eval</Text></View>
    <Text>Please enter your choices.</Text>

    <View style={{ flexDirection: 'row', marginBottom: 10 }}><Text>A</Text><TextInput editable={true} style={{ backgroundColor: 'red', padding: 10, width: '80%' }}/></View>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}><Text>B</Text><TextInput editable={true} style={{ backgroundColor: 'red', padding: 10, width: '80%' }}/></View>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}><Text>C</Text><TextInput editable={true} style={{ backgroundColor: 'red', padding: 10, width: '80%' }}/></View>
    <View style={{ flexDirection: 'row', marginBottom: 10 }}><Text>D</Text><TextInput editable={true} style={{ backgroundColor: 'red', padding: 10, width: '80%' }}/></View>
    <CustomButton btnText={'Add'} />
  </View>

);

export default MultipleChoice;