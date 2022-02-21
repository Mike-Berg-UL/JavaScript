var urls = ["http://www.cnn.com",
            "http://www.nbcnews.com",
			"http://www.yahoo.com",
			"http://www.reddit.com",
			"http://www.twitch.com"
			];
rdiv = document.getElementById("random_link");
rand = Math.floor(Math.random() * 5);
rdiv.innerHTML = '<a href="' + urls[rand] + '">Random Site!</a>';