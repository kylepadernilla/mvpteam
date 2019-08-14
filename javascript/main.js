

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

        <div class="collapsible-body white">

        <p class="topheader">

        <span class="inputSec">Input #</span>
        <span class= "grade">Grade</span>
        <span class="weight">Weight</span>

        </p>


        <!-- Inputs -->
        <p>
        <p>Input 1:

        <input type="text" name="input1" class="input1A" value="">

        <input type="text" name="input2" class="input1B" value="">
        </p>

        </p>

        <p>
        <p>Input 2:

        <input type="text" name="input1" class="input2A" value="">

        <input type="text" name="input2" class="input2B" value="">
        </p>

        </p>

        <p>
        <p>Input 3:

        <input type="text" name="input1" class="input3A" value="">

        <input type="text" name="input2" class="input3B" value="">
        </p>

        </p>

        <p>
        <p>Input 4:

        <input type="text" name="input1" class="input4A" value="">

        <input type="text" name="input2" class="input4B" value="">
        </p>

        </p>

        <p>
        <p>Input 5:

        <input type="text" name="input1" class="input5A" value="">

        <input type="text" name="input2" class="input5B" value="">
        </p>

        </p>

        <br>
        <button type="button" class="calculateButton">Calculate!</button>

        <div class="output">
          <h3>Your Overall mark is: <input type="text" name="input2" class="total" value=""></h3>

        </div>

        <div class="output">
          <h3>Your gpa for the course is: <input type="text" name="input2" step="any" class="gpaOutput" value=""></h3>

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

$.getScript

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
