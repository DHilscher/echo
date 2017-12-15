import * as firebase from 'firebase';
import { FB_KEY } from 'react-native-dotenv';

const config = {
    apiKey: FB_KEY,
    authDomain: "echo-bb022.firebaseapp.com",
    databaseURL: "https://echo-bb022.firebaseio.com",
    projectId: "echo-bb022",
    storageBucket: "echo-bb022.appspot.com",
    messagingSenderId: "1023061591229"
};

export default firebase.initializeApp(config);


 