const input1A = document.querySelector('#inputsList');


input1A.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("hello");
const user = firebase.auth().currentUser;
  data.collection('users').doc(user.uid).add({
    inputOne: input1A['input1A'].value
  }).then (() => {
    console.log("hello");
  }).catch (err =>{
    console.log(err.message);
  });
});
