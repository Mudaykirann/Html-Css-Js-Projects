var text = document.querySelector('#text');
var btn = document.querySelector('#button');
var res = document.querySelector('#result');

btn.onclick = function (){
    var  words = text.value;
    console.log(words);

    var trimwords = words.replace('\s + /g'," ").trim()
    var splitwords = trimwords.split(" ");
    let wordscount = splitwords.length;

    res.innerHTML = `Words:${wordscount}`;
}
