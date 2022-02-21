var quotes = ["You is so fine and divine!",
			  "I can't belive it's not low fat",
			  "The proof is the pudding",
			  "Is that a walrus?",
			  "What's a cucumber?",
			  "How do you make a grilled cheese?",
			  "Is mayonaise an instrument?",
			  "Cowabunga dudes!",
			  "WAP",
			  "Turtles are cool",
			  "I'm a banana" 
			  ];
var q_div = document.getElementById("my_quote");
var rand_int = Math.floor(Math.random() * 10);
q_div.innerHTML = quotes[rand_int];