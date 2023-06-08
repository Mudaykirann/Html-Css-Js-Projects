var mainheading = document.getElementById('main-heading');
var btnIncreaseFont = document.getElementById('btn-increase');
var btnDecreaseFont = document.getElementById('btn-decrease');

var initialfontsize = window.getComputedStyle(mainheading).fontSize;
initialfontsize = parseInt(initialfontsize.substring(0,(initialfontsize.length-2)));

btnIncreaseFont.onclick = function(){
    initialfontsize += 10
    mainheading.style.fontSize = initialfontsize + "px";

}

btnDecreaseFont.onclick = function(){
    initialfontsize -= 10
    mainheading.style.fontSize = initialfontsize + "px";
}

