import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CustomButton from '../CustomButton'

const MultipleChoice = () => (

  <View>
    <View style={styles.logoContainer}><Text>ECHO</Text></View>
    <View style={styles.feedbacktitle}><Text>End of Proj. Eval</Text></View>
    <Text>Please enter question and be detailed!</Text>
    <TextInput multiline={true} editable={true} style={{ backgroundColor: 'red', padding: 10 }}/>
    <CustomButton btnText={'Add'} />
  </View>

);

export default MultipleChoice;