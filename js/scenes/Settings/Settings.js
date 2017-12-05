import React from 'react'
import { Text, View, ScrollView, Image, Button, Switch } from 'react-native'

import styles from './styles'
import PropTypes from 'prop-types'

const Setting = ({}) => {
  return (
    <ScrollView>
      <View>
        <Text>Logo would be here</Text>
      </View>

      <View>
        <Text>Settings</Text>
      </View>

      <View>
        <Text>User Information</Text>
        <Text>username</Text>
        <Text>email</Text>
        <Text>password</Text>
      </View>
      
      <View>
        <Text>Notification</Text>
        <Text>new results</Text>
        <Text>reminder</Text>
      </View>
    </ScrollView>
  )
}

export default Setting