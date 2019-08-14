

//adding in Courses
const courseList = document.querySelector('.courses');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const courseName =  document.querySelector('.coursename');
//function that check if user exists
const setupUI = (user) => {

if(user){

  //toggle ui elements.
  loggedInLinks.forEach(item => item.style.display = 'block');
  loggedOutLinks.forEach(item => item.style.display = 'none');

}

else{
  //toggle ui elements.
  loggedInLinks.forEach(item => item.style.display = 'none');
  loggedOutLinks.forEach(item => item.style.display = 'block');

}

}

//setup courses.
const setupCourses = (data) => {


  if(data.length){

  let html = '';
  data.forEach(doc => {
    const course = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4">

         <span> ${course.title} </span>


        </div>
        <div class="collapsible-body white">

        <p>${course.content}</p>
        <a href="../calc.html">Click here to calculate your course mark</a>

        </div>

      
        </div>



      </li>
    `;
    html += li;
  });
  courseList.innerHTML = html;

}

else{
  courseList.innerHTML = '<h2 class= "center-align">  Login to view Courses <h2>'
}

};

//coursename.innerHTML = `<h2 class="collapsible-header grey lighten-4">${course.title}</h2>`



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
