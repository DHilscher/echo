import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as firebase from 'firebase';
import { goToRoute } from "../../lib/navigationHelpers";
import CustomButton from "../Buttons/CustomButton";
import {TitledInput} from '../CustomTextField';
import { indicatorStyles, styles } from './styles';

class Register4 extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
        }
    }

    handleSubmit = (event) => {
        const { email, password } = this.state
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: "Register Failed."});
        });
    }

    handleChange = () => {
        this.handleSubmit()
        goToRoute("register5")
    }

    render() {
        const { index, signUp } = this.props
        const isEnabled = this.state.email.length > 0 && this.state.password.length > 0;
        
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={require('../../assets/images/registration/registration-4.png')}
                />
                <View>
                    <View>
                        <Text>Your email address:</Text>
                        <TitledInput 
                            label='Email Address'
                            placeholder='you@email.com'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                    <View>
                        <Text>Create a password:</Text>
                        <TitledInput 
                            label='Password'
                            autoCorrect={false}
                            placeholder='*******'
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>
                    <TouchableOpacity onPress={this.handleChange}>
                        {isEnabled && <CustomButton btnText={'>'} /> }
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Register4;
