var images = [
   "alia.png",
   "deeljet.png",
   "rabino.png",
   "rocky.png",
   "sony.png",
   "familia.png",
];
var i = 0;
function nextslide() {
    if (i == 6) { i = 0; }
    document.getElementById("album").src = images[i]; i++;
}