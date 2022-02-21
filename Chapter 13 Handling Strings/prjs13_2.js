function set_it() {
	var thename = prompt("Enter your name: ", "Bill");
	var	thetext = "name=" + thename;
	var	expdate = "expires=Mon, 30 Mar 2022 15:00:00 UTC";
	var	newtext = encodeURIComponent(thetext);
	newtext += expdate;
	document.cookie = newtext;
}
function read_it() {
	var myname = document.cookie;
	var	fixed_cookie = decodeURIComponent(myname);
	var	thepair = fixed_cookie.split("=");
	alert("Wecome, " + thepair[0]);
}
if(document.cookie) {
		read_it();
}
else {
	set_it();
	read_it();
}