const calcbtn= document.querySelector(".calculateButton");

function setGrades() {

	// Define grade inputs.
		var input1A = parseFloat(document.querySelector(".input1A").value);
		var input2A = parseFloat(document.querySelector(".input2A").value);
		var input3A = parseFloat(document.querySelector(".input3A").value);
		var input4A = parseFloat(document.querySelector(".input4A").value);
		var input5A = parseFloat(document.querySelector(".input5A").value);


		//set the grade array.
		var grades= [input1A, input2A, input3A, input4A, input5A];

		// Define weight inputs.
			var input1B = parseFloat(document.querySelector(".input1B").value);
			var input2B = parseFloat(document.querySelector(".input2B").value);
			var input3B = parseFloat(document.querySelector(".input3B").value);
			var input4B = parseFloat(document.querySelector(".input4B").value);
			var input5B = parseFloat(document.querySelector(".input5B").value);


			//set the weight array.
			var weight= [input1B, input2B, input3B, input4B, input5B];

			//for loop that runs from 0 to length of array.


			var i;
			var sum=0;

			for(i=0; i< weight.length; i++)
			{

				//divide int
				let divide=grades[i] / 100;

				console.log(grades);

				//check if at position blabla it is NaN. if it is, then just add position 0 to current position. if not, then add a counter.
				if (isNaN(weight[i]))
				{
						var weightPortion= weight.slice(0,i);
						var answer= weightPortion[i] * divide;
						break;
				}

				else{

				var answer= weight[i]* divide;


			}
				//add in another array.
				sum= sum+ answer;
			};


		document.querySelector(".total").value = sum + "%";

	}

	calcbtn.addEventListener("click", setGrades, false); //calculate button listener.
