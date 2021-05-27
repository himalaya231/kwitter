
//ADD YOUR FIREBASE LINKS
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
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update
({purpose:"adding room name"})
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name-" +Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div>"
      document.getElementById("output").innerHTML +=row
    });
  });

}

getData();

function redirecttoroomname(name){
  console.log(name)
  localStorage.setItem("room_name",name)
  window.location="kwitter_page.html"
}
function logout(){
   localStorage.removeItem("user_name")
   localStorage.removeItem("room_name")
   window.location="index.html"
}
