import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { colors } from '../../config/styles';
import CustomButton from '../../components/Buttons/CustomButton';

const topIndicatorStyles = {
  stepIndicatorSize: 18,
  currentStepIndicatorSize: 23,
  separatorStrokeWidth: 4,
  currentStepStrokeWidth: 4,
  stepStrokeCurrentColor: colors.red,
  stepStrokeWidth: 4,
  stepStrokeFinishedColor: colors.red,
  stepStrokeUnFinishedColor: colors.red,
  separatorFinishedColor: colors.red,
  separatorUnFinishedColor: colors.red,
  stepIndicatorFinishedColor: colors.red,
  stepIndicatorUnFinishedColor: colors.lightestGreen,
  stepIndicatorCurrentColor: colors.red,
  stepIndicatorLabelFontSize: 1,
  currentStepIndicatorLabelFontSize: 1,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: 'transparent',
  labelSize: 1,
  currentStepLabelColor: 'transparent'
}

class Onboarding extends Component {

  constructor() {
    super();
    this.state = {
      currentPosition: 0
    }
  }

  onPageChange = (position) => {
      this.setState({currentPosition: position});
  }

  renderView = (page) => {
    if(page === 0) {
      return(
        <View style={styles.onboardingContentWrapper}>
          <Text style={styles.onboardingText}>In the whirlwind of today’s busy world, hard work can easily get overlooked.</Text>
          <Image style={styles.onboardingImage1} source={require('../../assets/images/onboarding/onboarding-1.png')} />
        </View>
      )
    } else if(page === 1) {
      return(
        <View style={styles.onboardingContentWrapper}>
          <Text style={styles.onboardingText}>Your projects are always evolving, and so are your skills.</Text>
          <Image style={styles.onboardingImage2} source={require('../../assets/images/onboarding/onboarding-2.png')} />
        </View>
      )
    } else if(page === 2) {
      return(
        <View style={styles.onboardingContentWrapper}>
          <Text style={styles.onboardingText}>Keep tabs on your development - grow by receiving feedback from the people you value.</Text>
          <Image style={styles.onboardingImage3} source={require('../../assets/images/onboarding/onboarding-3.png')} />
        </View>
      )
    } else {
      return(
        <View style={{flex: 1}}>
          <Image style={styles.onboardingImage4} source={require('../../assets/images/onboarding/onboarding-4.png')} />
          <View style={styles.onboarding4Wrapper}>
            <Text style={styles.onboarding4Text}>Let your performance echo.</Text>
            <TouchableOpacity>
              <CustomButton btnText="Get Started" />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.onboardingWrapper}>

        {
          this.state.currentPosition < 3 ? 
            <View style={styles.stepIndicatorWrapper}>
              <StepIndicator stepCount={3} customStyles={topIndicatorStyles} currentPosition={this.state.currentPosition} />
            </View> : false
        }
        {this.renderView(this.state.currentPosition)}
        {
          this.state.currentPosition < 3 ? 
          <View style={styles.ButtonWrapper}>
            <TouchableOpacity onPress={(e) => this.onPageChange(this.state.currentPosition + 1)}>
              <View style={styles.arrowButton}>
                <Icon name="ios-arrow-dropright-circle" size={70} color={colors.red} />
              </View>
            </TouchableOpacity>
            {
              this.state.currentPosition < 1 ?
              <TouchableOpacity>  
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity> : false
            }      
          </View> : false
        }

      </View>
    );
  }
}

export default Onboarding;
