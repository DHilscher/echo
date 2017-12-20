import * as firebase from 'firebase';
import store from '../store'

const GET_FULLNAME = "GET_FULLNAME";
const GET_EMAIL = "GET_EMAIL";

export const getUserFullname = (data) => {
  return { 
    type: 'GET_FULLNAME', 
    data
  }
}

export const getUserEmail = (data) => {
  return { 
    type: 'GET_EMAIL', 
    data
  }
}

export const getFullname = uid => dispatch => {
          return firebase.database()
          .ref(`users/${uid}`)
          .once('value')
          .then((res) => {
            dispatch(getUserFullname(res.val().fullname))
          })
          .catch((error) => {
            console.log(error)
          });

};

export const getEmail = uid => dispatch => {
          return firebase.database()
          .ref(`users/${uid}`)
          .once('value')
          .then((res) => {
            dispatch(getUserEmail(res.val().email))
          })
          .catch((error) => {
            console.log(error)
          });

};

const initialState = {
  fullName: '',
  email: ''
}

export default firebaseReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_FULLNAME":
        return {
          ...state,
          fullName: action.data
        }

      case "GET_EMAIL":
        return {
          ...state,
          email: action.data
        }

        default: 
            return state
    }
}
