//inputs and grades into database

const grades = document.querySelectorAll(".inputA");
//const weights = document.querySelectorAll('.inputB');
console.log(grades);

/*
create.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = firebase.auth().currentUser;
  data.collection('users').doc(user.uid).collection('courses').add({ //.doc only gets strings.
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
*/
