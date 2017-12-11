import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import CustomButton from "../Buttons/CustomButton";

import { styles } from './styles';

const Register1 = ({index}) => {
    return (
        <View style={styles.container} > 
            <Image style={styles.image}
                source={require('../../assets/images/registration/registration-1.png')}
            />
            <View>
                <Text style={styles.welcome}>Hello, welcome to echo!</Text>
            </View>
            <View>
                <Text style={styles.journey}>Begin your journey.</Text>
            </View>
            <TouchableOpacity onPress={() => index()} >
                <CustomButton btnText={'>'}/>
            </TouchableOpacity>
            <TouchableOpacity >
                <View>
                    <Text >Terms & Conditions</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Register1