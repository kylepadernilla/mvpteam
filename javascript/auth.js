



//how to manage status of account
auth.onAuthStateChanged(user => {
  if (user) {

    //get data.
    data.collection('courses').get().then(snapshot => {
    setupCourses(snapshot.docs);
    setupUI(user);
    });

  } else {
    setupUI();
    setupCourses([]);
  }
})

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
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    // close the signup modal & reset form
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
  });
});
