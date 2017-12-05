import React from 'react'
import { Text, View, ScrollView, Image, Button, Switch } from 'react-native'

import styles from './styles'
import PropTypes from 'prop-types'

const Setting = ({}) => {
  <ScrollView>
    <View> <Text>Logo would be here</Text> </View>
    <View> <Text>Settings</Text> </View>
    <View>
      <Text>User Information</Text>
      <Text>username</Text> <Button> Change </Button>
      <Text>email</Text> <Button> Change </Button>
      <Text>password</Text> <Button> Change </Button>
    </View>
    <View>
      <Text>Notification</Text>
      <Text>new results</Text> <Switch> Change </Switch>
      <Text>reminder</Text> <Switch> Change </Switch>
    </View>
  </ScrollView>
}

export default Setting