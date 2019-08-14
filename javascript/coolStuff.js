//inputs and grades into database

const grades = document.querySelector(".inputA");
//const weights = document.querySelectorAll('.inputB');
/*
var arr = $("input[name='input1']").map(function() {
    return this.value;
}).get();

/*
var weight = $("input[name='input2']").map(function() {
    return this.value;
}).get();
*/
//console.log(arr);
//console.log(weight);


    grades.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = firebase.auth().currentUser;
    const other = user.currentUser;

    data.collection('users').doc(user.uid).collection('courses').doc(other.uid).collection('grades').add({ //.doc only gets strings.
      //title: create['title'].value,
      //content: create['content'].value
      num: grades['inputA'].value
    }).then(() => {
      console.log("hello");
    });
  });




    /* close the create modal & reset form
    const modal = document.querySelector('#modal-create');
    M.Modal.getInstance(modal).close();
    create.reset();
  }).catch(err => {
    console.log(err.message);
  }); */
