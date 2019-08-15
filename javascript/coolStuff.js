const button = document.querySelector(".insertButton");

//INPUT 1
const input1 = document.querySelector("#input1A");

initialIn();
function initialIn() {
  getUser();
  var getuid = window.localStorage.getItem("UID")
  console.log(getuid) // will log the UID
  var ref = data.collection('users').doc(getuid);
  ref.get().then(function(doc) {
    if (doc.exists) {
      var data1 = doc.data();
      var result = Object.keys(data1).map(function(key) {
        return data1[key];
      });
      var rs = result[0];
      var a = rs;
      input1.value = a;
    } else {
      console.log("No such doc");
    }
  }).catch(function(error) {
    console.log("Error getting doc", error);
  });
}

function getUser (){
  var currentUser;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currentUser = user.uid;
        console.log(currentUser); //this returns my user object
        window.localStorage.setItem("UID",currentUser);
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
};

function storeUser(){
  getUser();
  var ref = data.collection('users').doc(getuid);
  var merge =  ref.set({
      inputOne: input1.value
  }, {merge:true});

  console.log(input1.value);
};

//END OF INPUT 1

//INPUT 2






button.addEventListener('click', getUser, false);
