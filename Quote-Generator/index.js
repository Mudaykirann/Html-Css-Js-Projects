var btn = document.querySelector('#btn');
var p = document.querySelector('#quote');

var api = 'https://api.quotable.io/random';


btn.addEventListener('click',() =>{
    fetch(api).then(response => response.json()).then(data =>{
        p.innerText = data.content; 
    })
    .catch(() => alert("Error While fetching api"))
})