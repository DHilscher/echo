import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import CustomButton from '../CustomButton'
import { indicatorStyles, styles } from './styles';


const Register3 = ({index}) => {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={require('../../assets/images/registration/registration-3.png')}
                />
                <View>
                    <View>
                        <Text>What industry of freelance do work in?</Text>
                    </View>
                    <View>
                        <TextInput editable={true} maxLength={30} />
                        <Text>Your professional field</Text>
                    </View>
                    <TouchableOpacity onPress={() => index()}>
                        <CustomButton btnText={'>'}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
}

export default Register3;