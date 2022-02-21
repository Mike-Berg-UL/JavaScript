var im = document.getElementById("pic1"),
	imlink = document.getElementById("imlink");
function on_image() {
	im.src = "image2.jpg";
}
function off_image() {
	im.src = "image1.jpg";
}
im.addEventListener("mouseover", on_image, false);
imlink.addEventListener("focus", on_image, false);
im.addEventListener("mouseout", off_image, false);
imlink.addEventListener("blur", off_image, false);