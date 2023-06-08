var count = document.getElementById('count');
var btninc = document.getElementById('increase');
var btndec = document.getElementById('decrease');
var reset  = document.getElementById('resetbtn');

var countdownval = 0;
btninc.onclick = function(){
    countdownval = countdownval + 1;
    count.innerHTML = countdownval
    console.log('btn clicked');
}
btndec.onclick = function(){
    countdownval = countdownval - 1;
    count.innerHTML = countdownval;
    console.log('btn clicked');
}
resetbtn.onclick = function(){
    countdownval = 0;
    count.innerHTML = countdownval
    console.log('btn clicked');
}

