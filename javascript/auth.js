
//how to manage status of account
auth.onAuthStateChanged(user => {
  if (user) {
    //get data.
    data.collection('courses').onSnapshot(snapshot => {
    setupCourses(snapshot.docs);
    setupUI(user);
    });

  } else {
    setupUI();
    setupCourses([]);
  }
});

// add a course
const create = document.querySelector('#create-form');
create.addEventListener('submit', (e) => {
  e.preventDefault();
  data.collection('courses').add({
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

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //preventing default because default is to refresh the screen
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return data.collection('users')
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    signupForm.querySelector('.error').innerHTML = '';
    // close the signup modal & reset form
  }).catch (err => {
    signupForm.querySelector('.error').innerHTML = err.message;
  });
});

//signout
const logout = document.querySelector("#logout");
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then (() => {
    console.log('user signed out');
    alert("You are signed out");
  });
});

//login
const login =  document.querySelector('#login-form');
login.addEventListener('submit', (e) => {
  e.preventDefault();

  //get info
  const email = login['login-email'].value;
  const password = login['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    login.reset();
    login.querySelector('.error').innerHTML = err.message;
  }).catch (err => {
    login.querySelector('.error').innerHTML = err.message;
  });
});
