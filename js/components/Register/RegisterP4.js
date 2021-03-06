import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import CustomButton from '../CustomButton'
import { indicatorStyles, styles } from './styles';

const Register4 = ({index}) => {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={require('../../assets/images/registration/registration-4.png')}
                />
                <View>
                    <View>
                        <Text>Your email address:</Text>
                        <TextInput editable={true} maxLength={30} />
                    </View>
                    <View>
                        <Text>Create a password:</Text>
                        <TextInput editable={true} maxLength={30} />
                    </View>
                    <TouchableOpacity onPress={() => index()}>
                        <CustomButton btnText={'>'}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
}

export default Register4;

  