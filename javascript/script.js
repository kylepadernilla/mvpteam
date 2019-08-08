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


			var i,arrayPointer;
			var sum=0;

			for(i=0; i< weight.length; i++)
			{


				//divide int
				let divide=grades[i] / 100;

				if(arrayPointer != 0){

				if (isNaN(weight[i]))
				{
						var weightPortion= weight.slice(0,i);
						var answer= weightPortion[i] * divide;
						break;
				}

				else{

				var answer= weight[i]* divide;
			}

			}

			else{
			var answer= weight[i]* divide;
		}
				//add in another array.
				arrayPointer++;

				sum= sum+ answer;
			};

		let sumAnswer= sum.toFixed(2) + "%";
		document.querySelector(".total").value = sumAnswer;

		if(sum < 50)
		{
			document.querySelector(".gpaOutput").value = 0;

		}

		else if(sum >= 50 && sum <= 54)
		{
				document.querySelector(".gpaOutput").value = "1.00";
		}

		else if(sum >= 55 && sum <= 59)
		{
				document.querySelector(".gpaOutput").value = "1.33";
		}

		else if(sum >= 60 && sum <= 62)
		{
				document.querySelector(".gpaOutput").value="1.67";
		}

		else if(sum >= 63 && sum <= 66)
		{
				document.querySelector(".gpaOutput").value = "2.00";
		}

		else if(sum >= 67 && sum <= 69)
		{
				document.querySelector(".gpaOutput").value = "2.33";
		}

		else if(sum >= 70 && sum <= 72)
		{
				document.querySelector(".gpaOutput").value = "2.67";
		}

		else if(sum >= 73 && sum <= 76)
		{
				document.querySelector(".gpaOutput").value = "3.00";
		}

		else if(sum >= 77 && sum <= 79)
		{
				document.querySelector(".gpaOutput").value = "3.33";
		}

		else if(sum >= 80 && sum <= 84)
		{
				document.querySelector(".gpaOutput").value = "3.67";
		}

		else if(sum >= 85 && sum <= 89)
		{
				document.querySelector(".gpaOutput").value = "4.00";
		}

		else if(sum >= 90)
		{
				document.querySelector(".gpaOutput").value = "4.33";
		}

	}

	calcbtn.addEventListener("click", setGrades, false); //calculate button listener.
