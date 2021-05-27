//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCGGKpB8p514Jrppph7w0pW8WSz9UqmEok",
      authDomain: "kwitter-949b8.firebaseapp.com",
    databaseURL:"https://kwitter-949b8-default-rtdb.firebaseio.com",
      projectId: "kwitter-949b8",
      storageBucket: "kwitter-949b8.appspot.com",
      messagingSenderId: "379035957161",
      appId: "1:379035957161:web:b27f71e1e9d7a9fa60f6b8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var username=localStorage.getItem("user_name")
    var room_name=localStorage.getItem("room_name")

    function Send(){
        var msg=  document.getElementById("textinput").value
    firebase.database().ref(room_name).push({
      name:username,
      message:msg,
      like:0

    })
    document.getElementById("textinput").value=""
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
