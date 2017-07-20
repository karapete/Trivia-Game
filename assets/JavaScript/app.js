


var quiz= [
		{ question:"What year was Finding Nemo released?"
		,choices:["2000","2003","2005","2001"]
		,correctAnswer:1
	},

		{ question:"Who was the lead actor in Footloose?"
	  ,choices:["Patick Swazey","Chris Penn", "Kevin Bacon", "Kevin Costner"]
	  ,correctAnswer:2
	},
		{ question:"Which one of these movies did Denzel Washington NOT star in?"
	  ,choices:["Training Day","Green Mile","Inside Man", "American Gangster"]
	  ,correctAnswer:1
	},
		{ question:"In the movie Dirty Dancing, who puts baby in a corner?"
		,choices:["Your Mom", "Her Dad", "Nobody", "Danny"]
		,correctAnswer:2

	},
		{ question:"In Aladdin, what is the name of Jasmine’s pet tiger?"
		,choices:["Abu", "Rajah", "Razoul", "Rafiki"]
		,correctAnswer:1

	},
		{ question:"What is the title of the 3rd movie in the Harry Potter series?"
		,choices:["The Chamber of Secrets", "The Prisoner of Azkaban", "The Goblet of Patron", "The Order of the Phoenix"]
		,correctAnswer:1
		}
		];

		

for (var i = 0; i < quiz.length; i++) {
	//creating a list item that holds my questions
		var listItem = document.createElement('li');

		listItem.innerHTML=quiz[i].question;
//appending my list item to my ordered list
		var orderedList= document.getElementById('orderedList');
		orderedList.appendChild(listItem);

		for (var j = 0; j < quiz[i].choices.length; j++) {
			//creating input and a label
		var input = document.createElement('input');
		input.type = "radio";
		input.value = quiz[i].choices[j];
		input.after = quiz[i].choices[j]
		var label = document.createElement('label');
		label.innerHTML = quiz[i].choices[j];
//appending input and label to my ordered list
		orderedList.appendChild(input);
		orderedList.appendChild(label);
		}

}


















