import React, {Component} from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import styles from "./styles";
import { goToRouteWithProps } from "../../lib/navigationHelpers";

const data = [
  { name: 'Mid Project Eval', evals: [ "Beth Andrews" ] },
  { name: 'End Project Eval', evals: [ "Beth Andrews", 'Clarke Wong' ] },
]

class SingleResults extends Component {
  
  render() {

    const { passedProps } = this.props

    return (
      <View>

        <View style={styles.headerNavBarWrapper}>
          <Image style={styles.headerNavBar} source={require ('../../assets/images/main-nav-bar.png')}/>
        </View>

        <View style={styles.titlecontainer}><Text style={styles.scenetitle}>Results</Text></View>

        <View style={styles.resultSearch}>
          <TextInput style={styles.searchBar} />
          <Image source={require("../../assets/images/icon-magnifier.png")} />
        </View>

        <Text style={styles.singleTitle}>{passedProps.name}</Text>
        <Text style={styles.singleAbout}>{passedProps.about}</Text>

        {data.map((x, idx) => 
          <TouchableOpacity key={x.name} activeOpacity={0.8} onPress={()=>goToRouteWithProps('singleEval', {passedProps, x} )}>
            <View style={ idx%2==0 ? styles.evenSingleResult : styles.oddSingleResult }>
              <Text style={styles.resultname}>{x.name}</Text>

              <View style={styles.index}>
                <Text style={styles.number}>{x.evals.length}</Text>
              </View>

            </View>
          </TouchableOpacity>
        )}

      </View>
    );
  }
};

export default SingleResults 
