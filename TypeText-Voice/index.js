var text_box = document.getElementById('text')
var btn = document.querySelector('button');

btn.onclick = function (){
    const text = new SpeechSynthesisUtterance(text_box.value);
    speechSynthesis.speak(text);
}