import React, { Component } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, Switch } from 'react-native';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import styles from './styles';
import { colors } from '../../config/styles.js';
import SmallCustomButton from '../../components/Buttons/SmallCustomButton';
import NavigationBar from "../../components/NavigationBar";
import { password } from '../../redux/modules/signup';
import SettingsInputs from '../../components/CustomTextField/SettingsInputs';

class Setting extends Component {

  constructor() {
    super()
    this.state = {
      showFullname: false,
      showEmail: false,
      showPassword: false,
      email: '',
      password: '',
      newEmail: '',
      newName: ''
    }
  }

  _updateNameChange = () => {
    const { user, _updateName } = this.props
    const { newName } = this.state
    let ref = firebase.database().ref(`users/${user.uid}`)
      
      ref.update({
        fullname: newName
      }).then(function () {
        _updateName();
      })
  }

  _updateEmailChange = () => {
    const { user, _updateEmail } = this.props
    const { email, password, newEmail } = this.state
    firebase
      .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(user) {
            user.updateEmail(newEmail)
            return user
        })
        .then( user => firebase.database()
            .ref(`users/${user.uid}`)
            .update({ 
              email: newEmail
            })).then(function () {
              _updateEmail();
            })
  }

  _updatePassword = () => {
    const { email } = this.props
    firebase.auth().sendPasswordResetEmail(email)
  }
  
  _handleFullnameChange = () => {
    this.setState({ 
      showFullname: !this.state.showFullname
    })
  }

  _handleEmailChange = () => {
    this.setState({ 
      showEmail: !this.state.showEmail
    })
  }
  _handlePasswordChange = () => {
    this.setState({ 
      showPassword: !this.state.showPassword
    })
  }

  _handleEmailSubmit = () => {
    this._updateEmailChange()
    this.setState({ 
      showEmail: !this.state.showEmail
    })
  }

  _handleNameSubmit = () => {
    this._updateNameChange()
    this.setState({ 
      showFullname: !this.state.showFullname
    })
  }

  _handlePasswordSubmit = () => {
    this._updatePassword()
    this.setState({ 
      showPassword: !this.state.showPassword
    })
  }

  render() {
    const { email, fullname } = this.props

    return (
      <ScrollView style={styles.settingContainer}>
        <NavigationBar pageTitle="Settings"/>
        
        <View style={[styles.settingSection, styles.userInformationSection]}>
          <Text style={styles.sectionTitle}>User Information</Text>
  
          <View>
            <View style={styles.optionContainer}>
              {!this.state.showFullname 
                ? <Text style={styles.optionText}>{fullname}</Text>
                : <SettingsInputs 
                    placeholder="your new name" 
                    value={this.state.newName}
                    onChangeText={newName => this.setState({ newName })} /> }
              {!this.state.showFullname 
                ? null
                : <TouchableOpacity activeOpacity={0.5} onPress={this._handleNameSubmit} >
                    <SmallCustomButton btnText="Save" />
                  </TouchableOpacity>}
              <TouchableOpacity activeOpacity={0.5} onPress={this._handleFullnameChange} >
                <SmallCustomButton btnText={!this.state.showFullname ? "Change" : "Cancel"} />
              </TouchableOpacity>
            </View>

            <View style={styles.optionContainer}>
              {!this.state.showEmail
              ? <Text style={styles.optionText}>{email}</Text>
              : <View>
                  <SettingsInputs 
                      placeholder="your current email"
                      value={this.state.email}
                      onChangeText={email => this.setState({ email })} /> 

                  <SettingsInputs 
                      placeholder="your password"
                      value={this.state.password}
                      onChangeText={password => this.setState({ password })} /> 

                  <SettingsInputs 
                      placeholder="your new email"
                      value={this.state.newEmail}
                      onChangeText={newEmail => this.setState({ newEmail })}/> 

                </View>}
                {!this.state.showEmail 
                ? null
                : <TouchableOpacity activeOpacity={0.5} onPress={this._handleEmailSubmit} >
                    <SmallCustomButton btnText="Save" />
                </TouchableOpacity> }
               <TouchableOpacity activeOpacity={0.5} onPress={this._handleEmailChange} >
                    <SmallCustomButton btnText={!this.state.showEmail ? "Change" : "Cancel"} />
                </TouchableOpacity>
            </View>

            <View style={styles.optionContainer}>
              {!this.state.showPassword
              ? <Text style={styles.optionText}>Password</Text>
              : <Text style={styles.optionText}>Would you like to change your password?</Text> }
              {!this.state.showPassword 
                ? null
                : <TouchableOpacity activeOpacity={0.5} onPress={this._handlePasswordSubmit} >
                    <SmallCustomButton btnText="Yes" />
                  </TouchableOpacity>}
              <TouchableOpacity activeOpacity={0.5} onPress={this._handlePasswordChange} >
                <SmallCustomButton btnText={!this.state.showPassword ? "Change" : "Cancel"} />
              </TouchableOpacity>
            </View>
          </View>
  
        </View>

      </ScrollView>
    )
  }
}

export default Setting;