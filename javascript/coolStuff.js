const input1 = document.querySelector('#inputA');
console.log(input1.value);


input1.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("hello");
const user = firebase.auth().currentUser;
  data.collection('users').doc(user.uid).add({
    inputOne: input1.value
  }).then (() => {
    console.log("hello");
  }).catch (err =>{
    console.log(err.message);
  });
});
