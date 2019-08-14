const input1 = document.querySelector('#inputA');
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



input1.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("hello");
  const user = firebase.auth().currentUser;
  console.log(user);
    data.collection('users').add({
      inputOne: input1.value
    }).then (() => {
      console.log("hello");
    }).catch (err =>{
      console.log(err.message);
    });
});
