import React from 'react'
import { Text, View, Image, TouchableOpacity, Switch } from 'react-native'

import styles from './styles'
import PropTypes from 'prop-types'

const Setting = ({}) => {
  return (
    <View style={{ width: '100%'}}>
      <View style={{ backgroundColor: 'orange', height: 100, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Logo would be here</Text>
      </View>

      <View style={{ backgroundColor: 'purple', height: 70, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Settings</Text>
      </View>

      <View style={{ backgroundColor: 'green', height: 280, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>User Information</Text>
        <View style={{ backgroundColor: 'pink', width: '100%', height: 200, justifyContent: 'space-between', padding: 30 }}>
          <View style={{ justifyContent: 'flex-start', position: 'relative', backgroundColor: 'red' }}><Text style={{ color: 'white', fontSize: 16 }}>username</Text><TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: 'orange', width: 100, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, top: -10 }}><Text>Change</Text></TouchableOpacity></View>
          <View style={{ justifyContent: 'flex-start', position: 'relative', backgroundColor: 'red' }}><Text style={{ color: 'white', fontSize: 16 }}>email</Text><TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: 'orange', width: 100, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, top: -10 }}><Text>Change</Text></TouchableOpacity></View>
          <View style={{ justifyContent: 'flex-start', position: 'relative', backgroundColor: 'red' }}><Text style={{ color: 'white', fontSize: 16 }}>password</Text><TouchableOpacity activeOpacity={0.9} style={{ backgroundColor: 'orange', width: 100, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, top: -10 }}><Text>Change</Text></TouchableOpacity></View>
        </View>
      </View>

      <View style={{ backgroundColor: 'blue', height: 235, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Notification</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>new results</Text><Switch/>
        <Text style={{ color: 'white', fontSize: 16 }}>reminder</Text><Switch/>
      </View>
    </View>
  )
}

export default Setting