var wrapper = document.querySelector('.wrapper')
var input = document.querySelector('.form input'),
btn = document.querySelector('.form button'),
qrimg = document.querySelector('#image');

btn.addEventListener('click', () =>{
    var inputVal = input.value;
    if(inputVal){
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${inputVal}`
    }
    wrapper.classList.add('active')
})