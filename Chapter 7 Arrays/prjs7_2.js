var computer_parts = [ ["Monitors", "LCD Screens", "Vibrant Colors"],
					   ["Motherboards", "Fast"],
					   ["Chips", "Pentium", "Very Fast"],
					   ["Hard Drives", "100-50 GB", "Fast Reading"],
					   ["DVD_ROMS", "Burn CDs", "Burn DVDS", "Listen to both!"],
					   ["Cases", "All Sizes", "Choice of Colors"],
					   ["Power Supplies", "We can get on for any computer!"] ];
					   
var i = 0;
var j = 0;
for (i = 0; i < computer_parts.length; i++) {
	for (j = 0; j < computer_parts[i].length; j++) {
		if (j === 0) {
			document.write(computer_parts[i][j] + ": ");
		} 
			else if (j === computer_parts[i].length - 1) {
			document.write(computer_parts[i][j] + "<br>");
		} 
		else {
			document.write(computer_parts[i][j] + ", ");
		}
	}
}