import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import styles from "./styles";
import { colors } from '../../config/styles';
import { goToRoute } from "../../lib/navigationHelpers";
import CustomButton from "../../components/Buttons/CustomButton";
import NavigationBar from "../../components/NavigationBar";
import CustomSingleTextField from "../../components/CustomTextField/CustomSingleTextField";
import { addRecipientName, addRecipientEmail, updateToSentList } from "../../redux/modules/sendForm";

class SendEmail extends Component {

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

  constructor() {
    super();
    this.state = {
      customMessage: false,
    };
  }

  handleCustomMessage = () => {
    if (this.state.customMessage === true) {
      this.setState({ customMessage: false });
    } else {
      this.setState({ customMessage: true });
      goToRoute("sendMessage")
    }
  };

  handleRecipientName = (text) => {
    this.props.dispatch(addRecipientName(text));
  }

  handleEmail = (text) => {
    this.props.dispatch(addRecipientEmail(text));
  }

  addAnotherRecipient = (e) => {
    const { recipientName, recipientEmail, sentList } = this.props;
    sentList.push({recipientName, recipientEmail});
    this.props.dispatch(updateToSentList(sentList));
  }

  removeRecipient = (e, index) => {
    const { sentList } = this.props;
    const temp = sentList.splice(0);
    temp.splice(index, 1);
    this.props.dispatch(updateToSentList(temp));
  }

  render() {
    const { recipientName, recipientEmail, sentList } = this.props;

    return (
      <ScrollView style={styles.sendFormContainer}>
        <NavigationBar pageTitle="Send Form" />
        {
          sentList.map((recipient,index) => {
            return(
              <View style={styles.sentRecipientWrapper} key={index}>
                <View style={styles.sentRecipientCenter}>
                  <Text style={styles.sentRecipientText}>{recipient.recipientName}</Text>
                  <TouchableOpacity activeOpacity={0.7} onPress={(e) => this.removeRecipient(e,index)}>
                    <Icon
                      name="ios-close-circle-outline"
                      size={30}
                      color={colors.red}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )
          })
        }
        <View style={styles.sendEmailContentWrapper}>
          <CustomSingleTextField placeholder="Recipient Name" handler={this.handleRecipientName} value={recipientName} />
          <CustomSingleTextField placeholder="Email" handler={this.handleEmail} value={recipientEmail} />

          <View style={styles.optionsContainer}>

            <View style={styles.optionWrapper}>
              <View style={styles.optionContentWrapper}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => this.handleCustomMessage()}>
                  <Icon
                    name={
                      this.state.customMessage === false ? ("ios-square-outline") : ("ios-checkbox-outline")
                    }
                    size={40}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.optionText}>Customize recipient message</Text>
              </View>
            </View>

            <View style={styles.optionWrapper}>
              <View style={styles.optionContentWrapper}>
                <TouchableOpacity activeOpacity={0.7} onPress={(e) => this.addAnotherRecipient(e)}>
                  <Icon
                    name="ios-add-circle-outline"
                    size={40}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.optionText}>Add another recipient</Text>
              </View>
            </View>
          </View>
        </View>
        
        <TouchableOpacity activeOpacity={0.7} onPress={() => goToRoute("formSent")}>
          <CustomButton btnText={'Send'} />
        </TouchableOpacity>
        
      </ScrollView>
    );
  }
}


const mapStateToProps = state => {
  return {
    recipientName: state.sendFormReducer.recipientName,
    recipientEmail: state.sendFormReducer.recipientEmail,
    sentList: state.sendFormReducer.sentList
  }
}

export default connect(mapStateToProps)(SendEmail);