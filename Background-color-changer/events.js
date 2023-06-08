var btn = document.getElementById('btn-click');
var btn1 = document.querySelector('*')


var btn3 = document.getElementById('btn-click2');


function onCLick (){
    btn1.style.backgroundColor = "rgb("+Math.floor(Math.random() * 255)+","+
    Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) +")"
}
btn.addEventListener('click',onCLick)