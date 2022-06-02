const numbers = document.getElementsByClassName('number');
const count = document.getElementById('conta');

function clickButton( number ) {
    count.innerText = number;
}

function main() {
    for(let i = 0; i < numbers.length; i++) {
        numbers[i].onclick = () => { clickButton(numbers[i].innerHTML) };
    }   
}

main();