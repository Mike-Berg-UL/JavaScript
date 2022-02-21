for (var count = 0; count < document.forms.length; count++) {
	var formnum = count + 1;
	document.write("Form " + formnum + " has " + document.forms[count].length);
	document.write(" elements.<br>");
}