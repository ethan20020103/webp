setInterval("print()", "400");

document.addEventListener('keydown', delChar);


var output;


function delChar(e) {
    var lastword;
    lastword= output.innerHTML.substr(-1);
    var input;
    input= document.getElementsByTagName("div").item(0);
    input.innerHTML = e.key;

    if (lastword == e.key) {
        output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1);
    }
}
function print() {
    var result = Math.floor(Math.random() * 26);
    var charout = String.fromCharCode(result + 65);

    output = document.getElementsByTagName("P").item(0);
    output.innerHTML = charout + output.innerHTML;
}