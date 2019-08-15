const input1 = document.querySelector("#inputsList");
console.log(input1.value);

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



input1.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("hello");
  var ref = data.collection('users').doc(getuid);
  var merge =  ref.set({
      inputOne: input1['input1A'].value
  }, {merge:true});



});
