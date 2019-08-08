const calcbtn= document.querySelector(".calculateButton");

function setGrades() {

	// Define grade inputs.
		var course1A = parseFloat(document.querySelector(".course1A").value);
		var course2A = parseFloat(document.querySelector(".course2A").value);
		var course3A = parseFloat(document.querySelector(".course3A").value);
		var course4A = parseFloat(document.querySelector(".course4A").value);
		var course5A = parseFloat(document.querySelector(".course5A").value);
    var course6A = parseFloat(document.querySelector(".course6A").value);

		//set the grade array.
		var grades= [course1A, course2A, course3A, course4A, course5A];


			//for loop that runs from 0 to length of array.
			var i;
			var sum=0;
      var nums = [];

			for(i=0; i< grades.length; i++)
			{
        if (isNaN(grades[i])== false){
          nums[i] = grades[i];
          sum = sum + nums[i];
        }
			};

      var avg = sum/nums.length;

		document.querySelector(".total").value = avg;

	}

	calcbtn.addEventListener("click", setGrades, false); //calculate button listener.
