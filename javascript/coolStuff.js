const input1 = document.querySelector("#input1A");
const button = document.querySelector(".insertButton");

var re;
initialIn(re);
console.log(re);
input1.value = re;
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

function initialIn(a) {
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
      console.log(result[0]);
      console.log(typeof data1);
      console.log("data:", doc.data());
      var rs = result[0];

      a += result[0];
      console.log(a);
      return a;
    } else {
      console.log("No such doc");
    }
  }).catch(function(error) {
    console.log("Error getting doc", error);
  });
}



/*
//create element and render to input box
function renderInput (doc){
  let li = document.createElement('input');
  let inputOne = document.createElement('ul');

  console.log(input1.appendChild(li));
  li.setAttribute('date-id', doc.id);
  inputOne.textContent = doc.data().inputOne;

  li.appendChild(inputOne);
  input1.appendChild(li);
};


  getUser();
  var getuid = window.localStorage.getItem("UID");
  console.log(data.collection('users').doc(getuid));
  data.collection('users').doc(getuid).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data());
      renderInput(doc);
    });
  });
  */



button.addEventListener('click', getUser, false);
