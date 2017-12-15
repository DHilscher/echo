import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { occupation } from "../../redux/modules/signup";
import { connect } from 'react-redux';
import { styles } from "./styles";
import { colors } from "../../config/styles";
import { goToRoute } from "../../lib/navigationHelpers";
import ArrowButton from "../Buttons/ArrowButton";
import TopStepIndicator from "../TopStepIndicator";
import CustomSingleTextField from "../CustomTextField/CustomSingleTextField";

class Register3 extends Component { 

  handleOccupationChange = (value) => {
    this.props.dispatch(occupation(value))
    
  }
  
  render() {  
  return (
    <View style={styles.registerContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/images/registration/registration-3.png")}
      />

        <View style={styles.stepIndicatorWrapper}>
          <TopStepIndicator stepCount={3} currentPosition={1}/>
        </View>

        <View style={styles.registerContentContainer}>
          <View style={styles.contentQuestionWrapper}>
            <Text style={styles.registerExplainText}>What industry of freelance do work in?</Text>
            <CustomSingleTextField placeholder="Your professional field" handler={(text) => this.handleOccupationChange(text)}/>
          </View>

          <View style={styles.arrowButtonWrapper}>
            <TouchableOpacity onPress={() => goToRoute("register4")}>
              <ArrowButton color={colors.red} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => goToRoute("login")}>
            <Text style={styles.loginText}>Login</Text>
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