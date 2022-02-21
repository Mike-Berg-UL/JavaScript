var title_Attr = document.getElementById("div1");
window.alert(title_Attr.title);
var new_div = document.createElement("div");
var new_div_text = document.createTextNode("See you!");
new_div.appendChild(new_div_text);
new_div.title = "Lucky!";
title_Attr.appendChild(new_div);