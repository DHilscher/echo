import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import * as firebase from 'firebase';
import { connect } from 'react-redux';

import { styles } from "./styles";
import { colors } from "../../config/styles";
import { goToRoute } from "../../lib/navigationHelpers";
import ArrowButton from "../Buttons/ArrowButton";
import TopStepIndicator from "../TopStepIndicator";
import CustomSingleTextField from "../CustomTextField/CustomSingleTextField";

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
        const { fullname, occupation } = this.props

        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
                     .then( user => firebase.database()
                                         .ref(`users/${user.uid}`)
                                         .set({
                                             email: email,
                                             fullname: fullname,
                                             occupation: occupation
                                         }))
          .catch(() => {
            this.setState({ error: "Register Failed."});
        });
    }

    handleChange = () => {
        this.handleSubmit()
        goToRoute("register5")
    }

    render() {
        const isEnabled = this.state.email.length > 0 && this.state.password.length > 0;
        
        return (
            <View style={styles.registerContainer}>
                <Image
                    style={styles.image}
                    source={require("../../assets/images/registration/registration-4.png")}
                />
                <View style={styles.stepIndicatorWrapper}>
                    <TopStepIndicator stepCount={3} currentPosition={2}/>
                </View>

                <View style={styles.registerContentContainer}>
                    <View style={styles.contentQuestionWrapper}>
                        <Text style={styles.registerExplainText}>Your email address:</Text>
                        <TextInput 
                            label='Email Address'
                            placeholder='you@email.com'
                            placeholderTextColor={colors.mainGreen}
                            selectionColor={colors.yellow}
                            autoCapitalize = "none"
                            autoCorrect={false}
                            style={styles.textFieldText} 
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })} />

                        <Text style={styles.registerExplainText}>Create a password:</Text>
                        <TextInput 
                            label='Password'
                            placeholder='password'
                            placeholderTextColor={colors.mainGreen}
                            selectionColor={colors.yellow}
                            autoCapitalize = "none"
                            autoCorrect={false}
                            style={styles.textFieldText} 
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })} />
                    </View>

                    <View style={styles.arrowButtonWrapper}>
                        { isEnabled ? 
                            <TouchableOpacity onPress={this.handleChange}>
                                <ArrowButton color={colors.red}/>
                            </TouchableOpacity> :
                            <ArrowButton color={colors.lighterRed}/> 
                        }
                    </View>

                    <TouchableOpacity onPress={() => goToRoute("login")}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        fullname: state.signup.fullname,
        occupation: state.signup.occupation 
    }
  }
  
  export default connect(mapStateToProps)(Register4)
