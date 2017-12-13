import React, { Component } from "react";
import StepIndicator from "react-native-step-indicator";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { connect } from 'react-redux';
import { goToRoute } from "../../lib/navigationHelpers";

import { fullname } from "../../redux/modules/signup";
import CustomButton from "../Buttons/CustomButton";
import { indicatorStyles, styles } from "./styles";

class Register2 extends Component {

    handleNameChange = (value) => {
        this.props.dispatch(fullname(value))
    }

    render() {
        return (
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require("../../assets/images/registration/registration-2.png")}
            />
            <View>
              <View>
                <Text>Tell us more about yourself?</Text>
              </View>
              <View>
                <TextInput editable={true} maxLength={30} onChangeText={(text) => this.handleNameChange(text)} />
                <Text>Your first & last name</Text>
              </View>
              <TouchableOpacity onPress={() => goToRoute("register3")}>
                <CustomButton btnText={">"} />
              </TouchableOpacity>
            </View>
          </View>
        );
    }
};

const mapStateToProps = state => {
    return {
       fullname: state.signup.fullname 
    }
}

export default connect(mapStateToProps)(Register2)
