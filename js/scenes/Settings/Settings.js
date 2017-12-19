import React from 'react';
import { Text, View, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../config/styles.js';
import SmallCustomButton from '../../components/Buttons/SmallCustomButton';
import NavigationBar from "../../components/NavigationBar";

const Setting = ({}) => {
  return (
    <ScrollView style={styles.settingContainer}>
      <NavigationBar pageTitle="Settings"/>
      
      <View style={[styles.settingSection, styles.userInformationSection]}>
        <Text style={styles.sectionTitle}>User Information</Text>

        <View>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>full name</Text>
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

    </ScrollView>
  )
}

export default Setting;