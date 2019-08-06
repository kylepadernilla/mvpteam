	var quiz2 = document.querySelector(".input1").value;

function setGrades() {
		// Define those variables!


		var quiz3 = parseFloat(document.getElementById('quiz3').value);

		// Calculate the total points earned!
		var totalPoints = quiz1 + quiz2 + quiz3 + quiz4 + quiz5 + quiz6 + quiz7 + quiz8 + quiz9 + quiz10 + exam1 + exam2 + exam3 + extra;
		document.getElementById('total').value = totalPoints;

		// Select letter grade!
		if(totalPoints >= 184){
			document.getElementById('letter').value = "A";
		}

		else if(183 >= totalPoints && totalPoints >= 178){
			document.getElementById('letter').value = "A-";
		}

		else if(177 >= totalPoints && totalPoints >= 172){
			document.getElementById('letter').value = "B+";
		}

		else if(171 >= totalPoints && totalPoints >= 164){
			document.getElementById('letter').value = "B";
		}

		else if(163 >= totalPoints && totalPoints >= 158){
			document.getElementById('letter').value = "B-";
		}

		else if(157 >= totalPoints && totalPoints >= 152){
			document.getElementById('letter').value = "C+";
		}

		else if(151 >= totalPoints && totalPoints >= 144){
			document.getElementById('letter').value = "C";
		}

		else if(143 >= totalPoints && totalPoints >= 138){
			document.getElementById('letter').value = "C-";
		}

		else if(137 >= totalPoints && totalPoints >= 132){
			document.getElementById('letter').value = "D+";
		}

		else if(131 >= totalPoints && totalPoints >= 124){
			document.getElementById('letter').value = "D";
		}

		else if(123 >= totalPoints && totalPoints >= 118){
			document.getElementById('letter').value = "D-";
		}

		else{
			document.getElementById('letter').value = "E";
		}
	}

  console.log(quiz2);
