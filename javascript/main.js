//adding in Courses
const courseList = document.querySelector('.courses');
const setupCourses = (data) => {
  let html = '';
  data.forEach(doc => {
    const course = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${course.title} </div>
        <div class="collapsible-body white"> ${course.content} </div>
      </li>
    `;
    html += li;
  });
  courseList.innerHTML = html

};
}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
