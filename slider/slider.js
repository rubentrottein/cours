var header = document.getElementsByTagName('header');
var timer = window.setInterval(function (){f1();}, 1000);
var images=[
    "img/1.jpg",
    "img/2.jpg"
];
var i=0;
function f1(){
    header[0].style.backgroundImage = "url("+ images[i]+")";
    console.log(images[i]);
    i++;
    if (i===images.length){
        i=0;
    }
}