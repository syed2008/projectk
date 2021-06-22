//YOUR FIREBASE LINKS
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
       var user_name;
       var room_name;
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
     msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
       document.getElementById("msg").value = "";
     }
      function getData() {
             firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
                    firebase_message_id = childKey;
                 message_data = childData;
                 console.log(firebase_message_id);
                 console.log(message_data);
                 name = message_data['name'];
                 message = message_data['message'];
                 like = message_data['like'];
                 name_with_tag = "<H4> "+ name + "<img class='user_tick' src='tick.png'></h4>";
                 message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                 like_button = "<button class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
                 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like: " + like + "</span></button><hr>";
                 row = name_with_tag + message_with_tag + like_button + span_with_tag;
                 document.getElementById("output").innerHTML+= row;
                } }); }); } getData();
                function updatelike(message_id){
              console.log("clicked on like button - " + message_id);
              button_id = message_id;
              likes = document.getElementById(button_id).value;
              updated_like = Number(likes) + 1;
              console.log(updated_like);
              firebase.database().ref(room_name).child(message_id).update({
                     like: updated_like
              });
            }

                function logout(){
                       localStorage.removeItem("user_name");
                       localStorage.removeItem("room_name");
                       window.location.replace("kwitter.html");
                }