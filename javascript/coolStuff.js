// add a course
window.onload =  function(){
  const create = document.querySelector('#create-form');

  create.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = firebase.auth().currentUser;
    var ran = Math.random().toString(36);
    console.log(ran);
    const newid = ran;
    console.log(typeof newid);
    window.localStorage.setItem("NEW",newid);
    var getnew = window.localStorage.getItem("NEW")
    console.log(getnew);
    data.collection('users').doc(user.uid).collection('courses').doc(getnew).set({ //.doc only gets strings.
      title: create['title'].value,
      content: create['content'].value
    }).then(() => {
      // close the create modal & reset form
      const modal = document.querySelector('#modal-create');
      M.Modal.getInstance(modal).close();
      create.reset();
    }).catch(err => {
      console.log(err.message);
    });
  });
}




const button = document.querySelector(".insertButton");

const input1 = document.querySelector("#input1A");
const input2 = document.querySelector("#input2A");
const input3 = document.querySelector("#input3A");
const input4 = document.querySelector("#input4A");
const input5 = document.querySelector("#input5A");

const weight1 = document.querySelector("#input1B");
const weight2 = document.querySelector("#input2B");
const weight3 = document.querySelector("#input3B");
const weight4 = document.querySelector("#input4B");
const weight5 = document.querySelector("#input5B");

function storeUser(){
  var currentUser;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        currentUser = user.uid;
        console.log(currentUser); //this returns my user object
        window.localStorage.setItem("UID",currentUser);
        var getuid = window.localStorage.getItem("UID")
        console.log(getuid) // will log the UID
    } else {
        currentUser = "Error"
        console.log(currentUser); //this returns my user object
        window.localStorage.setItem("UID",currentUser);
         alert(" Error in your login code");
      // No user is signed in.
    }
  });

  var getuid = window.localStorage.getItem("UID");
  var getnew = window.localStorage.getItem("NEW");
  console.log(getuid) // will log the UID

  var ref = data.collection('users').doc(getuid).collection('courses').doc(getnew);
  var merge =  ref.set({
      input11: input1.value,
      input12: input2.value,
      input13: input3.value,
      input14: input4.value,
      input15: input5.value,
      input16: weight1.value,
      input17: weight2.value,
      input18: weight3.value,
      input19: weight4.value,
      input20: weight5.value
  }, {merge:true});

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
        var getnew = window.localStorage.getItem("NEW");
        var ref = data.collection('users').doc(getuid).collection('courses').doc(getnew);
        ref.get().then(function(doc) {
          if (doc.exists) {
            var data1 = doc.data();
            var result = Object.keys(data1).map(function(key) {
              return data1[key];
            });
            console.log(result);
            var rs1 = result[1];
            var rs2 = result[2];
            var rs3 = result[3];
            var rs4 = result[4];
            var rs5 = result[5];

            var rs6 = result[6];
            var rs7 = result[7];
            var rs8 = result[8];
            var rs9 = result[9];
            var rs10 = result[10];

            input1.value = rs1;
            input2.value = rs2;
            input3.value = rs3;
            input4.value = rs4;
            input5.value = rs5;

            weight1.value = rs6;
            weight2.value = rs7;
            weight3.value = rs8;
            weight4.value = rs9;
            weight5.value = rs10;
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
