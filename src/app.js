const numbers = document.getElementsByClassName('number');
const count = document.getElementById('conta');



console.log( numbers );

function clickButton() {
    count.innerText('AAA')
}

const btn_7 = document.getElementById('btn_7')
btn_7.onclick = clickButton();