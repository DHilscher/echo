import React from 'react'
import { Text, View, Image, TouchableOpacity, Switch } from 'react-native'

import styles from './styles'
import PropTypes from 'prop-types'

const Setting = ({}) => {
  return (
    <View style={styles.settingContainer}>
      <View style={styles.logoContainer}>
        <Text>Logo would be here</Text>
      </View>

      <View style={styles.titleDivider}>
        <Text style={styles.titleDividerText}>Settings</Text>
      </View>

      <View style={styles.userInformationSection}>
        <Text style={styles.userInformationTitle}>User Information</Text>
        <View style={styles.userInformationOptionsContainer}>
          <View style={styles.singleUserOptionContainer}><Text style={styles.userOptionText}>username</Text><TouchableOpacity activeOpacity={0.9}><Text>Change</Text></TouchableOpacity></View>
          <View style={styles.singleUserOptionContainer}><Text style={styles.userOptionText}>email</Text><TouchableOpacity activeOpacity={0.9}><Text>Change</Text></TouchableOpacity></View>
          <View style={styles.singleUserOptionContainer}><Text style={styles.userOptionText}>password</Text><TouchableOpacity activeOpacity={0.9}><Text>Change</Text></TouchableOpacity></View>
        </View>
      </View>

      <View style={styles.notificationSection}>
        <Text style={styles.notificationTitle}>Notification</Text>
        <Text>new results</Text><Switch/>
        <Text>reminder</Text><Switch/>
      </View>
    </View>
  )
}

export default Setting