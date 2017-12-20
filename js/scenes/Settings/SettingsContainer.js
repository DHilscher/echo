import React, { Component } from "react";
import { connect } from "react-redux";

import { getFullname, getEmail } from "../../redux/modules/firebase";
import store from "../../redux/store";
import Setting from "./Settings";
import BackButton from "../../components/BackButton";

class SettingsContainer extends Component {
  static route = {
    navigationBar: {
      backgroundColor: "#00000000",
      borderBottomWidth: 0,
      translucent: true,
      header: {
        translucent: true
      },
      renderLeft: (route, props) => <BackButton />
    }
  };

  componentDidMount() {
    const { user } = this.props;
    store.dispatch(getFullname(user.uid));
    store.dispatch(getEmail(user.uid));
  }

  _updateName = () => {
    const { user } = this.props;
    store.dispatch(getFullname(user.uid));
  };

  _updateEmail = () => {
    const { user } = this.props;
    store.dispatch(getEmail(user.uid));
  };

  render() {
    const { email, fullName } = this.props.userInfo;
    const { user } = this.props;

    return (
      <Setting
        fullname={fullName}
        email={email}
        user={user}
        _updateName={this._updateName}
        _updateEmail={this._updateEmail}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    userInfo: state.fbuser
  };
};

export default connect(mapStateToProps)(SettingsContainer);
