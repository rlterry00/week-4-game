$(document).ready(function() {

	var randomNumber = Math.floor((Math.random() * 120) + 19);
	var jewelOne = Math.floor((Math.random() * 12) + 1);
	var jewelTwo = Math.floor((Math.random() * 12) + 1);
	var jewelThree = Math.floor((Math.random() * 12) + 1);
	var jewelFour = Math.floor((Math.random() * 12) + 1);
	var wins = 0;
	var losses = 0;

	console.log(jewelOne, jewelTwo, jewelThree, jewelFour);

	$("#randomNumber").html(randomNumber);

	$(document).on("click", ".jewel", function()
	{
		var totalScore = [];

		var userChoice = jewelOne + jewelTwo + jewelThree + jewelFour;
		totalScore.push(userChoice);

		var string = "";

		

		for (var i = 0; i < totalScore.length; i++) {
			string = totalScore[i]
		};
		
		$(".totalScore").html(totalScore);
		
		console.log(totalScore);
		
		
		
	})

});

	



