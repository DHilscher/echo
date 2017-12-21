import React, { Component } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, Switch } from 'react-native';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';

import styles from './styles';
import { colors } from '../../config/styles.js';
import { password } from '../../redux/modules/signup';
import { goToRoute } from "../../lib/navigationHelpers";
import { logout } from "../../redux/modules/authentication";
import store from '../../redux/store';
import CustomButton from '../../components/Buttons/CustomButton';
import SmallCustomButton from '../../components/Buttons/SmallCustomButton';
import NavigationBar from "../../components/NavigationBar";
import SettingsTextField from '../../components/CustomTextField/SettingsTextField';
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
      newName: '',
      error: ''
    }
  }

  signOut = () => {
    firebase
        .auth()
        .signOut()
        .then(store.dispatch(logout()))
        .then(()=>{
          return goToRoute('login')
        })
  }

  _updateNameChange = () => {
    const { user, _updateName } = this.props
    const { newName } = this.state
    let ref = firebase.database().ref(`users/${user.uid}`)
      
    if(newName.length > 0)
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
        .catch(() => {
          this.setState({ error: "Your update failed. Please try again."});
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
            { !this.state.showFullname ? 
              (
                <View style={styles.optionContainer}>
                  <Text style={styles.optionText}>{fullname}</Text>
                  <TouchableOpacity activeOpacity={0.5} onPress={this._handleFullnameChange} >
                    <SmallCustomButton btnText="Change" />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.changeOptionContainer}>
                  <SettingsTextField
                    label="fullName" 
                    placeholder="Enter your new name" 
                    value={this.state.newName}
                    onChangeText={newName => this.setState({ newName })} 
                  />
                  <View style={styles.changeOptionButtonsWrapper}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._handleNameSubmit} >
                      <SmallCustomButton btnText="Save" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._handleFullnameChange} >
                      <SmallCustomButton btnText="Cancel" />
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }

            { !this.state.showEmail ? 
              (
                <View style={styles.optionContainer}>
                  <Text style={styles.optionText}>{email}</Text>
                  <TouchableOpacity activeOpacity={0.5} onPress={this._handleEmailChange} >
                    <SmallCustomButton btnText="Change" />
                  </TouchableOpacity>
                 </View>
              ) : (
                <View style={styles.changeOptionContainer}>
                  <SettingsTextField
                    label="currentEmail" 
                    placeholder="Enter your current email" 
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                  />
                  <SettingsTextField 
                    label="password" 
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })} 
                  /> 
                  <SettingsTextField 
                    label="newEmail" 
                    placeholder="Enter your new email"
                    value={this.state.newEmail}
                    onChangeText={newEmail => this.setState({ newEmail })}
                  />
                  <View style={styles.changeOptionButtonsWrapper}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._handleEmailSubmit} >
                      <SmallCustomButton btnText="Save" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._handleEmailChange} >
                      <SmallCustomButton btnText="Cancel" />
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }

            { !this.state.showPassword ? 
              (
                <View style={styles.optionContainer}>
                  <Text style={styles.optionText}>Password</Text>
                  <TouchableOpacity activeOpacity={0.5} onPress={this._handlePasswordChange} >
                    <SmallCustomButton btnText="Change" />
                  </TouchableOpacity>
                 </View>
              ) : (
                <View style={styles.changeOptionContainer}>
                  <Text style={styles.optionText}>Would you like to change your password?</Text>
                  <View style={[styles.changeOptionButtonsWrapper, styles.signOutButtons]}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._handlePasswordSubmit} >
                      <SmallCustomButton btnText="Yes" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._handlePasswordChange} >
                      <SmallCustomButton btnText="Cancel" />
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }
          </View>
  
        </View>

        <View style={[styles.signOutSection, styles.notificationSection]}>
          <TouchableOpacity activeOpacity={0.5} onPress={this.signOut} >
              <CustomButton btnText="Sign Out"/>
          </TouchableOpacity>
        </View>

      </ScrollView>
    )
  }
}

export default Setting;