	var quiz2 = document.querySelector(".input1A").value;
	const calcbtn= document.querySelector(".calculateButton");

function setGrades() {
		// Define those variables!


		var quiz1 = parseFloat(document.getElementById('quiz3').value);

		// Calculate the total points earned!
		var totalPoints = quiz1 + quiz2 + quiz3 + quiz4 + quiz5 + quiz6 + quiz7 + quiz8 + quiz9 + quiz10 + exam1 + exam2 + exam3 + extra;
		document.queySelector(".output .total").value = totalPoints;

	}
