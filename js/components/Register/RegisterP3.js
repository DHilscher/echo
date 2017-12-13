import React, { Component } from "react";
import { connect } from 'react-redux';
import StepIndicator from "react-native-step-indicator";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { goToRoute } from "../../lib/navigationHelpers";
import { occupation } from "../../redux/modules/signup";
import CustomButton from "../Buttons/CustomButton";
import { indicatorStyles, styles } from "./styles";

class Register3 extends Component { 

  handleOccupationChange = (value) => {
    this.props.dispatch(occupation(value))
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/registration/registration-3.png")}
        />
        <View>
          <View>
            <Text>What industry of freelance do work in?</Text>
          </View>
          <View>
            <TextInput editable={true} maxLength={30} onChangeText={(text) => this.handleOccupationChange(text)} />
            <Text>Your professional field</Text>
          </View>
          <TouchableOpacity onPress={() => goToRoute("register4")}>
            <CustomButton btnText={">"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const mapStateToProps = state => {
  return {
     occupation: state.signup.occupation 
  }
}

export default connect(mapStateToProps)(Register3)