import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyDCS-kLgrf3Vqmir0ttAA61GnGardQc1SI",
    authDomain: "noteapp-test-a1027.firebaseapp.com",
    databaseURL: "https://noteapp-test-a1027-default-rtdb.firebaseio.com",
    projectId: "noteapp-test-a1027",
    storageBucket: "noteapp-test-a1027.appspot.com",
    messagingSenderId: "915636292268",
    appId: "1:915636292268:web:b16378117cb28cb529ad09",
    measurementId: "G-NVFYTHL8HE"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;