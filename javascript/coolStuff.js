const button = document.querySelector(".insertButton");

const input1 = document.querySelector("#input1A");
const input2 = document.querySelector("#input2A");
const input3 = document.querySelector("#input3A");
const input4 = document.querySelector("#input4A");
const input5 = document.querySelector("#input5A");

function storeUser(){
  var currentUser;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currentUser = user.uid;
        console.log(currentUser); //this returns my user object
        window.localStorage.setItem("UID",currentUser);
        var getuid = window.localStorage.getItem("UID")
        console.log(getuid) // will log the UID
        console.log("hello");
    } else {
        currentUser = "Error"
        console.log(currentUser); //this returns my user object
        window.localStorage.setItem("UID",currentUser);
         alert(" Error in your login code");
      // No user is signed in.
    }
  });

  var getuid = window.localStorage.getItem("UID")
  console.log(getuid) // will log the UID
  var ref = data.collection('users').doc(getuid);
  var merge =  ref.set({
      input11: input1.value,
      input12: input2.value,
      input13: input3.value,
      input14: input4.value,
      input15: input5.value
  }, {merge:true});

  console.log(input1.value);
};
initialIn();
function initialIn() {
  var currentUser;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currentUser = user.uid;
        console.log(currentUser); //this returns my user object
        window.localStorage.setItem("UID",currentUser);
        var getuid = window.localStorage.getItem("UID")
        console.log(getuid) // will log the UID
        var ref = data.collection('users').doc(getuid);
        ref.get().then(function(doc) {
          if (doc.exists) {
            var data1 = doc.data();
            var result = Object.keys(data1).map(function(key) {
              return data1[key];
            });
            console.log(result);
            var rs1 = result[0];
            var rs2 = result[1];
            var rs3 = result[2];
            var rs4 = result[3];
            var rs5 = result[4];

            input1.value = rs1;
            input2.value = rs2;
            input3.value = rs3;
            input4.value = rs4;
            input5.value = rs5;
          } else {
            console.log("No such doc");
          }
        }).catch(function(error) {
          console.log("Error getting doc", error);
        });
    } else {
        currentUser = "Error"
        console.log(currentUser); //this returns my user object
        window.localStorage.setItem("UID",currentUser);
         alert(" Error in your login code");
      // No user is signed in.
    }
  });
}

button.addEventListener('click', storeUser, false);
