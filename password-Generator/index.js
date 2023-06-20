var input = document.getElementById('psw');
let len = 12;

var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var nums = '1234567890'
var symbols = '!@#$%^&*()_+{}[]*-';
var allchars = uppercase + lowercase + nums + symbols;

function createPassword(){

    var password = '';
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += nums[Math.floor(Math.random() * nums.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while(len > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)]
    }
    input.value = password;

}
