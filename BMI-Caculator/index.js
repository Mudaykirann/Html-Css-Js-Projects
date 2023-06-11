var weight = document.querySelector('#wieght-value')
var height = document.querySelector('#hieght-value')
var weightOption = document.querySelector('#weight-option')
var heightOption = document.querySelector('#height-option')
var result = document.getElementById('result');
var calc = document.querySelector('.calc')
var reset = document.querySelector('.reset')

calc.addEventListener('click',function(){
    if (weightOption.value == 'Kgs' && heightOption.value=='Centimeters'){
        height.value = 0.01 * height.value;
        var res = parseFloat(weight.value / (height.value * height.value)).toFixed(4);
        console.log(res)
    }
    if (weightOption.value == 'Pounds' && heightOption.value=='Inches'){
        var kilograms = weight.value * 0.45359237;
        var meters = height.value * 0.0254;
        var res = parseFloat(kilograms / (meters*meters)).toFixed(4);
        console.log(res);
    }
    if (weightOption.value =='Kgs' && heightOption.value=='Inches'){
        var kilograms = weight.value;
        var meters = height.value * 0.0254;
        var res = parseFloat(kilograms / (meters*meters)).toFixed(4);
        console.log(res);
    }
    if (weightOption.value == 'Pounds' && heightOption.value=='Centimeters'){
        var kilograms = weight.value * 0.45359237;
        var meters = height.value * 0.01;
        var res = parseFloat(kilograms / (meters*meters)).toFixed(4);
        console.log(res);
    }
    if (res<18.5){
        result.innerHTML = `Severe Thinness : ${res}`;
    }
    if(18.5<res<25){
        result.innerHTML = `Normal : ${res}`;
    }
    if(res>25){
        result.innerHTML = `Severe Thickness : ${res}`;
    }
})
reset.addEventListener('click',function(){
    weight.value = '';
    height.value='';
    result.innerHTML = '';
})