import React from 'react';
import { View, Image, Text} from 'react-native';

import { styles } from './styles';

const NavigationBar = ({ pageTitle }) => (
  <View>
    <View style={styles.headerNavBarWrapper}>
      <Image
        style={styles.headerNavBar}
        source={require("../../assets/images/main-nav-bar.png")}
      />
    </View>
    <View style={styles.pageTitleWrapper}>
      <Text style={styles.pageTitle}>{pageTitle}</Text>
    </View>
  </View>
);

export default NavigationBar;