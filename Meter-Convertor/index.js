var input = document.getElementById('input');
var res = document.getElementById('result');

var inputOptions = document.getElementById('input-options__values');
var resOptions = document.getElementById('output-options__values');

input.addEventListener('keyup',myres);
inputOptions.addEventListener('change',myres);
resOptions.addEventListener('change',myres);


function myres(){

    if( inputOptions.value === 'Meter' && resOptions.value === 'Kilometer'){
        res.value = input.value * 0.001;
    }
    if(inputOptions.value === 'Meter' && resOptions.value === 'Centimeter'){
        res.value = input.value * 10;
    }
    if(inputOptions.value === 'Meter' && resOptions.value === 'Millimeter'){
        res.value = input.value * 100;
    }
    if(inputOptions.value === 'Meter' && resOptions.value === 'Meter'){
        res.value = input.value;
    }



    if( inputOptions.value === 'Kilometer' && resOptions.value === 'Kilometer'){
        res.value = input.value;
    }
    if(inputOptions.value === 'Kilometer' && resOptions.value === 'Centimeter'){
        res.value = input.value * 10000;
    }
    if(inputOptions.value === 'Kilometer' && resOptions.value === 'Millimeter'){
        res.value = input.value * 1000000;
    }
    if(inputOptions.value === 'Kilometer' && resOptions.value === 'Meter'){
        res.value = input.value * 1000;
    }

    

    if( inputOptions.value === 'Centimeter' && resOptions.value === 'Kilometer'){
        res.value = input.value * 0.00001;
    }
    if(inputOptions.value === 'Centimeter' && resOptions.value === 'Centimeter'){
        res.value = input.value;
    }
    if(inputOptions.value === 'Centimeter' && resOptions.value === 'Millimeter'){
        res.value = input.value * 10;
    }
    if(inputOptions.value === 'Centimeter' && resOptions.value === 'Meter'){
        res.value = input.value * 0.01;
    }



    if( inputOptions.value === 'Millimeter' && resOptions.value === 'Kilometer'){
        res.value = input.value * 0.000001;
    }
    if(inputOptions.value === 'Millimeter' && resOptions.value === 'Centimeter'){
        res.value = input.value * 0.01;
    }
    if(inputOptions.value === 'Millimeter' && resOptions.value === 'Millimeter'){
        res.value = input.value;
    }
    if(inputOptions.value === 'Millimeter' && resOptions.value === 'Meter'){
        res.value = input.value * 0.0001;
    }
}