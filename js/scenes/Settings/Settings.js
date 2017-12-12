import React from 'react';
import { Text, View, Image, TouchableOpacity, Switch } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../config/styles.js';
import SmallCustomButton from '../../components/Buttons/SmallCustomButton';

const Setting = ({}) => {
  return (
    <View style={styles.settingContainer}>
      <View>
        <Image style={styles.headerNavBar} source={require ('../../assets/images/main-nav-bar.png')}/>
      </View>
      <View style={styles.pageTitleWrapper}>
        <Text style={styles.pageTitle}>Settings</Text>
      </View>

      
      <View style={[styles.settingSection, styles.userInformationSection]}>
        <Text style={styles.sectionTitle}>User Information</Text>

        <View>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>username</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <SmallCustomButton btnText="Change"/>
            </TouchableOpacity>
          </View>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>email</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <SmallCustomButton btnText="Change"/>
            </TouchableOpacity>
          </View>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>password</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <SmallCustomButton btnText="Change"/>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <View style={[styles.settingSection, styles.notificationSection]}>
        <Text style={styles.sectionTitle}>Notification</Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>new results</Text>
          <Switch tintColor={colors.red} onTintColor={colors.red} />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>reminder</Text>
          <Switch tintColor={colors.red} onTintColor={colors.red} />
        </View>
      </View>

    </View>
  )
}

export default Setting;