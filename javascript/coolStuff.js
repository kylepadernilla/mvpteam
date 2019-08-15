const input1 = document.querySelector("#input1A");
const button = document.querySelector(".insertButton");

var ref= database.ref('users/input1');

data.collection('user').get().then((snapshot)) => {


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

  var ref = data.collection('users').doc(getuid);
  var merge =  ref.set({
      inputOne: input1.value
  }, {merge:true});

  console.log(input1.value);
}



button.addEventListener('click', getUser, false);
