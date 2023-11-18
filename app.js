var firebaseConfig = {
  apiKey: "AIzaSyCtQLJdyUAsRtxSn4UTgNtJMW2qCnSt_pQ",
  authDomain: "testingapp-3ec2a.firebaseapp.com",
  databaseURL: "https://testingapp-3ec2a-default-rtdb.firebaseio.com",
  projectId: "testingapp-3ec2a",
  storageBucket: "testingapp-3ec2a.appspot.com",
  messagingSenderId: "734461450225",
  appId: "1:734461450225:web:42b078ce127b990116d650"
};
// Initialize Firebase
var app  = firebase.initializeApp(firebaseConfig);


function signup(){
    var email = document.getElementById("useremail");
    var password = document.getElementById("userpassword");
    var name = document.getElementById("name");
    var city = document.getElementById("city");


    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
      window.location.href  = 'dashbox.html'
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });

var userdetail ={
  name : name.value,
  city:city.value,
}

firebase.database().ref("user/").set(userdetail);    
}
function login(){
  var email = document.getElementById("useremail");
  var password = document.getElementById("userpassword");

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    window.location.href = 'dashbox.html';
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });



}
function goggle(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}
function github(){
  var provider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });















}