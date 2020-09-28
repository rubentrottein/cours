var start = document.getElementById('start');
var body =document.getElementsByTagName("body")[0];
var lightbox = document.getElementsByTagName("p")[0];
start.addEventListener("click", appear);
document.getElementsByTagName("p")[0].addEventListener("click", disappear);
document.getElementsByTagName("h2")[0].addEventListener("click", function(){toggleSection("triggerLightbox");});
document.getElementsByTagName("h2")[1].addEventListener("click", function(){toggleSection("testForm");});
document.getElementsByTagName("h2")[2].addEventListener("click", function(){toggleSection("testBlur");});
function appear(){
    lightbox.style.display = "block";
    lightbox.innerHTML = "<img id='start' src='img/train.jpg'>";
    document.getElementById("bgvid").style.filter= "blur(8px)";
    body.style.background =  "rgba(255,255,255,.3)";
    body.style.zIndex =  "5";
}
function disappear(){
    lightbox.style.display = "none";
    body.style.filter=  "none";
    document.getElementById("bgvid").style.filter= "none";
}
/*
Fonction JQuery pour l'accordéon
/!\Requiert Jquery
*
$( function() {
    $( ".accordion" ).accordion({
    collapsible: true
    });
}); 
*/

function toggleSection(section){
    document.getElementById(section).style.display = "block";
}
toggleSection("triggerLightbox");