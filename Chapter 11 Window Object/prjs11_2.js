setTimeout (function() {
	var stay = confirm("Do you want to continue using this website?");
		if (stay === false) {
			window.location = "http://cnn.com";
		}
}, 5000);