var start = document.getElementById('start');
var body =document.getElementsByTagName("body")[0];
var lightbox = document.getElementsByTagName("p")[0];
start.addEventListener("click", appear);
document.getElementsByTagName("p")[0].addEventListener("click", disappear);
function appear(){
    lightbox.style.display = "block";
    lightbox.innerHTML = "<img id='start' src='img/train.jpg'>";
    body.style.background =  "rgba(255,255,255,.3)";
    body.style.zIndex =  "5";
}
function disappear(){
    lightbox.style.display = "none";
    body.style.filter=  "none";
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