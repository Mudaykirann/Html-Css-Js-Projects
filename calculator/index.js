let buttons = document.getElementsByTagName('button');
const result = document.getElementById('result');
let input = '';

for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        input = this.innerText;
        updateDisplay(input)
    }
}
console.log(input)
console.log(input)
console.log(result.innerText)

function updateDisplay(input){
    let currentDisplay = result.innerText;
    if(currentDisplay == "0"){
        if(input != "C" && input!='='){
            result.innerText = ""
            result.innerText += input;
        }
    }
    else{
        if(input=='C'){
            result.innerText='0'
        }
        if(input != "C" && input!='='){
            result.innerText += input
        }
        if(input=='='){
            let display = result.innerText
            result.innerText = eval(display)
        }
    }
}