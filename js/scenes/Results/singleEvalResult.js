import React, {Component} from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import styles from "./styles";
import { colors } from "../../config/styles";
import { goToRouteWithProps } from "../../lib/navigationHelpers";
import NavigationBar from "../../components/NavigationBar";

class SingleResults extends Component {
  static route = {
    navigationBar: {
      backgroundColor: "#00000000",
      tintColor: colors.darkGreen,
      borderBottomWidth: 0,
      translucent: true,
      header: {
        translucent: true
      }
    }
  };
  
  render() {

    const { passedProps } = this.props

    console.log('eval', passedProps)

    return (
      <View>

        <NavigationBar pageTitle="Results"/>

        <View style={styles.resultSearch}>
          <TextInput style={styles.searchBar} />
          <Image source={require("../../assets/images/icon-magnifier.png")} />
        </View>

        <Text style={styles.singleTitle}>{passedProps.passedProps.name}</Text>
        <Text style={styles.singleAbout}>{passedProps.x.name}</Text>

        {passedProps.x.evals.map((x, idx) => 
          <TouchableOpacity key={idx} activeOpacity={0.8} onPress={()=>goToRouteWithProps('answer', x)}>
            <View style={ idx%2==0 ? styles.evenSingleResult : styles.oddSingleResult }>
              <Text style={styles.resultname}>{x}</Text>
            </View>
          </TouchableOpacity>
        )}

      </View>
    );
  }
};

export default SingleResults 
