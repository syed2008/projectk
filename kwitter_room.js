// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBBQi4BE_UULFOU4sjcvp2Av4mUy1Shqic",
    authDomain: "kwitter-bfcc3.firebaseapp.com",
    databaseURL: "https://kwitter-bfcc3-default-rtdb.firebaseio.com",
    projectId: "kwitter-bfcc3",
    storageBucket: "kwitter-bfcc3.appspot.com",
    messagingSenderId: "1025457391078",
    appId: "1:1025457391078:web:f1b669e0137d7c6bc70227"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addroom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding roomname"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("room name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });
});
}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html"
}